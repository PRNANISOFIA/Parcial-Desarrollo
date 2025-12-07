import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class ChangeGeneroRequest {
  @ApiProperty({ example: 'Juvenil' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  genero!: string;
}
