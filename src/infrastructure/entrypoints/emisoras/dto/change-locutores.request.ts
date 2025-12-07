import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class ChangeLocutoresRequest {
  @ApiProperty({ example: 7 })
  @IsNumber()
  @Min(1)
  numLocutores!: number;
}
