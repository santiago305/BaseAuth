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
import { Transform } from 'class-transformer';

const transformToStringArray = ({ value }: { value: unknown }) => {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  if (Array.isArray(value)) {
    return value.map((item) => String(item));
  }

  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        return parsed.map((item) => String(item));
      }
    } catch (error) {
      // ignoramos el error y tratamos el valor como string simple
    }
    return [value];
  }

  return undefined;
};

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
  @IsArray()
  @Transform(transformToStringArray)
  @IsString({ each: true })
  imagenes?: string[];

  @IsOptional()
  @IsArray()
  @Transform(transformToStringArray)
  @IsString({ each: true })
  videos?: string[];
}