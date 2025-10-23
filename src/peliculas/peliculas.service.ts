import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pelicula } from './entities/pelicula.entity';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { PeliculaMediaFiles } from './interfaces/pelicula-media-files.interface';
import { toPublicUploadUrl } from 'src/common/utils/file-upload.util';

@Injectable()
export class PeliculasService {
  constructor(
    @InjectRepository(Pelicula)
    private readonly peliculaRepo: Repository<Pelicula>,
  ) {}

  async findAll(params?: {
    page?: number;
    limit?: number;
    filters?: {
      titulo?: string;
      idioma?: string;
      ratingMin?: number;
      ratingMax?: number;
      fechaDesde?: string; // ISO date
      fechaHasta?: string; // ISO date
    };
    sortBy?: 'createdAt' | 'fecha_estreno' | 'rating';
    order?: 'ASC' | 'DESC';
  }) {
    const page = params?.page && params.page > 0 ? params.page : 1;
    const limit = params?.limit && params.limit > 0 ? params.limit : 10;

    const qb = this.peliculaRepo
      .createQueryBuilder('p')
      .where('p.deleted = false');

    const { filters } = params || {};
    if (filters?.titulo) {
      qb.andWhere('p.titulo ILIKE :titulo', { titulo: `%${filters.titulo}%` });
    }
    if (filters?.idioma) {
      qb.andWhere('p.idioma = :idioma', { idioma: filters.idioma });
    }
    if (filters?.ratingMin !== undefined) {
      qb.andWhere('p.rating >= :ratingMin', { ratingMin: filters.ratingMin });
    }
    if (filters?.ratingMax !== undefined) {
      qb.andWhere('p.rating <= :ratingMax', { ratingMax: filters.ratingMax });
    }
    if (filters?.fechaDesde) {
      qb.andWhere('p.fecha_estreno >= :fechaDesde', { fechaDesde: new Date(filters.fechaDesde) });
    }
    if (filters?.fechaHasta) {
      qb.andWhere('p.fecha_estreno <= :fechaHasta', { fechaHasta: new Date(filters.fechaHasta) });
    }

    const sortBy = params?.sortBy ?? 'createdAt';
    const order = params?.order ?? 'DESC';

    const sortMap: Record<string, string> = {
      createdAt: 'p.created_at',
      fecha_estreno: 'p.fecha_estreno',
      rating: 'p.rating',
    };
    qb.orderBy(sortMap[sortBy], order);

    qb.skip((page - 1) * limit).take(limit);

    const [data, total] = await qb.getManyAndCount();
    const normalizedData = data.map((pelicula) => this.normalizeMedia(pelicula));
    return { data: normalizedData, total, page, limit, pages: Math.ceil(total / limit) };
  }

  async findOne(id: string) {
    const pelicula = await this.peliculaRepo.findOne({ where: { id } });
    if (!pelicula || pelicula.deleted) throw new NotFoundException('Película no encontrada');
    return this.normalizeMedia(pelicula);
  }

  async create(dto: CreatePeliculaDto, files?: PeliculaMediaFiles) {
    const media = this.extractMediaFiles(files);

    const pelicula = this.peliculaRepo.create({
      ...dto,
      fecha_estreno: dto.fecha_estreno ? new Date(dto.fecha_estreno) : null,
      poster_url: media.poster ?? dto.poster_url ?? null,
      trailer_url: media.trailer ?? dto.trailer_url ?? null,
      imagenes: this.mergeMedia([], dto.imagenes, media.imagenes),
      videos: this.mergeMedia([], dto.videos, media.videos),
    });
    return this.peliculaRepo.save(pelicula);
  }

  async update(id: string, dto: UpdatePeliculaDto, files?: PeliculaMediaFiles) {
    const pelicula = await this.findOne(id);
    const media = this.extractMediaFiles(files);

    const currentImagenes = dto.imagenes !== undefined ? [] : pelicula.imagenes ?? [];
    const currentVideos = dto.videos !== undefined ? [] : pelicula.videos ?? [];

    const toSave = {
      ...pelicula,
      ...dto,
      fecha_estreno:
        dto.fecha_estreno !== undefined
          ? dto.fecha_estreno
            ? new Date(dto.fecha_estreno)
            : null
          : pelicula.fecha_estreno,
      poster_url: media.poster ?? dto.poster_url ?? pelicula.poster_url,
      trailer_url: media.trailer ?? dto.trailer_url ?? pelicula.trailer_url,
      imagenes: this.mergeMedia(currentImagenes, dto.imagenes, media.imagenes),
      videos: this.mergeMedia(currentVideos, dto.videos, media.videos),
    };
    return this.peliculaRepo.save(toSave);
  }

  async remove(id: string) {
    const pelicula = await this.findOne(id);
    pelicula.deleted = true;
    return this.peliculaRepo.save(pelicula);
  }

  async restore(id: string) {
    const pelicula = await this.peliculaRepo.findOne({ where: { id } });
    if (!pelicula) throw new NotFoundException('Película no encontrada');
    pelicula.deleted = false;
    return this.peliculaRepo.save(this.normalizeMedia(pelicula));
  }

  private extractMediaFiles(files?: PeliculaMediaFiles) {
    if (!files) {
      return { poster: undefined, trailer: undefined, imagenes: [], videos: [] };
    }

    const poster = files.poster?.[0] ? toPublicUploadUrl(files.poster[0].path) : undefined;
    const trailer = files.trailer?.[0] ? toPublicUploadUrl(files.trailer[0].path) : undefined;
    const imagenes = files.imagenes?.map((file) => toPublicUploadUrl(file.path)) ?? [];
    const videos = files.videos?.map((file) => toPublicUploadUrl(file.path)) ?? [];

    return { poster, trailer, imagenes, videos };
  }

  private mergeMedia(
    base: string[],
    fromDto?: string[],
    uploaded?: string[],
  ) {
    const result = [...(base ?? [])];

    if (fromDto) {
      result.push(...fromDto);
    }

    if (uploaded) {
      result.push(...uploaded);
    }

    return Array.from(new Set(result));
  }

  private normalizeMedia(pelicula: Pelicula) {
    pelicula.imagenes = pelicula.imagenes ?? [];
    pelicula.videos = pelicula.videos ?? [];
    return pelicula;
  }
}