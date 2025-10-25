import { IsString, IsOptional, IsDateString, IsNumber, Min, Max, IsBoolean } from 'class-validator';

export class CreateNoticiaDto {
  @IsString()
  titulo: string;

  @IsOptional()
  @IsString()
  subtitulo?: string;

  @IsOptional()
  @IsString()
  imagen_url?: string;

  @IsOptional()
  @IsDateString()
  fecha?: string;

  @IsOptional()
  @IsString()
  contenido?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 1 })
  @Min(0)
  @Max(10)
  rating?: number;

  @IsOptional()
  @IsBoolean()
  estado?: boolean;
}
