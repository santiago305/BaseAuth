import {
  IsString,
  IsOptional,
  IsDateString,
  IsInt,
  Min,
  Max,
  IsNumber,
  IsArray,
} from 'class-validator';

export class CreatePeliculaDto {
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsDateString()
  fecha_estreno?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  duracion_minutos?: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 1 })
  @Min(0)
  @Max(10)
  rating?: number;

  @IsOptional()
  @IsString()
  idioma?: string;

  @IsOptional()
  @IsString()
  poster_url?: string;

  @IsOptional()
  @IsString()
  trailer_url?: string;

  @IsOptional()
  @IsString()
  url_pelicula?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  generos?: string[];
}
