import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  Body,
  Query,
  UseGuards,
  UseInterceptors,
  UploadedFiles,
} from '@nestjs/common';
import { PeliculasService } from './peliculas.service';
import { CreatePeliculaDto } from './dto/create-pelicula.dto';
import { UpdatePeliculaDto } from './dto/update-pelicula.dto';
import { JwtAuthGuard } from 'src/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { Roles } from 'src/common/decorators';
import { RoleType } from 'src/common/constants';
import { peliculaMediaUploadInterceptor } from './peliculas.upload.config';
import { PeliculaMediaFiles } from './interfaces/pelicula-media-files.interface';

@Controller('peliculas')
export class PeliculasController {
  constructor(private readonly peliculasService: PeliculasService) {}

  @Get()
  findAll(
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('titulo') titulo?: string,
    @Query('idioma') idioma?: string,
    @Query('ratingMin') ratingMin?: string,
    @Query('ratingMax') ratingMax?: string,
    @Query('fechaDesde') fechaDesde?: string,
    @Query('fechaHasta') fechaHasta?: string,
    @Query('sortBy') sortBy?: 'createdAt' | 'fecha_estreno' | 'rating',
    @Query('order') order?: 'ASC' | 'DESC',
  ) {
    const p = page ? parseInt(page, 10) : undefined;
    const l = limit ? parseInt(limit, 10) : undefined;
    const rmin = ratingMin !== undefined ? Number(ratingMin) : undefined;
    const rmax = ratingMax !== undefined ? Number(ratingMax) : undefined;
    return this.peliculasService.findAll({
      page: p,
      limit: l,
      filters: { titulo, idioma, ratingMin: rmin, ratingMax: rmax, fechaDesde, fechaHasta },
      sortBy,
      order,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.peliculasService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleType.ADMIN, RoleType.MODERATOR)
  @UseInterceptors(peliculaMediaUploadInterceptor)
  create(@Body() dto: CreatePeliculaDto, @UploadedFiles() files: PeliculaMediaFiles) {
    return this.peliculasService.create(dto, files);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleType.ADMIN, RoleType.MODERATOR)
  @UseInterceptors(peliculaMediaUploadInterceptor)
  update(@Param('id') id: string, @Body() dto: UpdatePeliculaDto, @UploadedFiles() files: PeliculaMediaFiles) {
    return this.peliculasService.update(id, dto, files);
  }

  @Patch('remove/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleType.ADMIN)
  remove(@Param('id') id: string) {
    return this.peliculasService.remove(id);
  }

  @Patch('restore/:id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleType.ADMIN)
  restore(@Param('id') id: string) {
    return this.peliculasService.restore(id);
  }
}