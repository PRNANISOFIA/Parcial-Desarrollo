import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from 'class-validator';

export class CreateEmisoraRequest {
  @ApiProperty({ example: 'Radio Centro' })
  @IsString()
  @MinLength(3)
  nombre!: string;

  @ApiProperty({ example: 95 })
  @IsNumber()
  @Min(1)
  canal!: number;

  @ApiProperty({ example: 99.1, required: false })
  @IsNumber()
  @IsOptional()
  bandaFm?: number | null;

  @ApiProperty({ example: 760, required: false })
  @IsNumber()
  @IsOptional()
  bandaAm?: number | null;

  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(1)
  numLocutores!: number;

  @ApiProperty({ example: 'Noticias' })
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  genero!: string;

  @ApiProperty({ example: '06:00 - 22:00' })
  @IsString()
  @IsNotEmpty()
  horario!: string;

  @ApiProperty({ example: 'Empresa XYZ', required: false })
  @IsString()
  @IsOptional()
  patrocinador?: string | null;

  @ApiProperty({ example: 'Colombia' })
  @IsString()
  @MinLength(3)
  pais!: string;

  @ApiProperty({ example: 'Emisora con programación variada y alcance nacional' })
  @IsString()
  @MinLength(20)
  @MaxLength(300)
  descripcion!: string;

  @ApiProperty({ example: 8 })
  @IsNumber()
  @Min(1)
  numProgramas!: number;

  @ApiProperty({ example: 3 })
  @IsNumber()
  @Min(1)
  numCiudades!: number;
}
