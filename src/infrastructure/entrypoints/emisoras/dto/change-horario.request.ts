import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ChangeHorarioRequest {
  @ApiProperty({ example: '06:00 - 22:00' })
  @IsString()
  @IsNotEmpty()
  horario!: string;
}
