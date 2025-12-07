import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class ChangePatrocinadorRequest {
  @ApiPropertyOptional({ example: 'Nuevo patrocinador' })
  @IsString()
  @IsOptional()
  @MinLength(2)
  patrocinador?: string | null;
}
