import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class ChangeCoberturaRequest {
  @ApiProperty({ example: 5 })
  @IsNumber()
  @Min(1)
  numCiudades!: number;
}
