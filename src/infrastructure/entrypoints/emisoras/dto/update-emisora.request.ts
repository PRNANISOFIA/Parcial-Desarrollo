import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class UpdateEmisoraRequest {
  @ApiPropertyOptional({ example: 95 })
  @IsNumber()
  @IsOptional()
  @Min(1)
  canal?: number;

  @ApiPropertyOptional({ example: 99.1 })
  @IsNumber()
  @IsOptional()
  bandaFm?: number | null;

  @ApiPropertyOptional({ example: 760 })
  @IsNumber()
  @IsOptional()
  bandaAm?: number | null;

  @ApiPropertyOptional({ example: 6 })
  @IsNumber()
  @IsOptional()
  @Min(1)
  numLocutores?: number;

  @ApiPropertyOptional({ example: 'Musica' })
  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(30)
  genero?: string;

  @ApiPropertyOptional({ example: '07:00 - 21:00' })
  @IsString()
  @IsOptional()
  horario?: string;

  @ApiPropertyOptional({ example: 'Empresa XYZ' })
  @IsString()
  @IsOptional()
  patrocinador?: string | null;

  @ApiPropertyOptional({ example: 'Colombia' })
  @IsString()
  @IsOptional()
  @MinLength(3)
  pais?: string;

  @ApiPropertyOptional({ example: 'Nueva descripción con más detalle' })
  @IsString()
  @IsOptional()
  @MinLength(20)
  @MaxLength(300)
  descripcion?: string;

  @ApiPropertyOptional({ example: 10 })
  @IsNumber()
  @IsOptional()
  @Min(1)
  numProgramas?: number;

  @ApiPropertyOptional({ example: 4 })
  @IsNumber()
  @IsOptional()
  @Min(1)
  numCiudades?: number;

  @ApiPropertyOptional({ example: 'ACTIVA', enum: ['ACTIVA', 'INACTIVA'] })
  @IsString()
  @IsOptional()
  estado?: string;
}
