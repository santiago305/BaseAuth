import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Noticia } from './entities/noticia.entity';
import { CreateNoticiaDto } from './dto/create-noticia.dto';
import { UpdateNoticiaDto } from './dto/update-noticia.dto';

@Injectable()
export class NoticiasService {
  constructor(
    @InjectRepository(Noticia)
    private readonly repo: Repository<Noticia>,
  ) {}

  findAll() {
    return this.repo.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string) {
    const noticia = await this.repo.findOneBy({ id });
    if (!noticia) throw new NotFoundException('Noticia no encontrada');
    return noticia;
  }

  // ✅ Ahora recibe el id del usuario autenticado
  async create(dto: CreateNoticiaDto, userId?: string) {
    const noticia = this.repo.create({
      ...dto,
      createdBy: userId ?? null, // si no hay usuario, lo deja en null
    });

    return this.repo.save(noticia);
  }

  async update(id: string, dto: UpdateNoticiaDto) {
    const noticia = await this.findOne(id);
    Object.assign(noticia, dto);
    return this.repo.save(noticia);
  }

  async remove(id: string) {
    const noticia = await this.findOne(id);
    await this.repo.remove(noticia);
    return { message: 'Noticia eliminada permanentemente' };
  }
}
