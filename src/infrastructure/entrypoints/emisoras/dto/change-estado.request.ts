import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsString } from 'class-validator';

export class ChangeEstadoRequest {
  @ApiProperty({ example: 'INACTIVA', enum: ['ACTIVA', 'INACTIVA'] })
  @IsString()
  @IsIn(['ACTIVA', 'INACTIVA'])
  estado!: string;
}
