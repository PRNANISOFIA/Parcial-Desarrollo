import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class ChangeBandaRequest {
  @ApiProperty({ example: 99.1, required: false })
  @IsNumber()
  @IsOptional()
  bandaFm?: number | null;

  @ApiProperty({ example: 760, required: false })
  @IsNumber()
  @IsOptional()
  bandaAm?: number | null;

  @ApiProperty({ example: 95 })
  @IsNumber()
  @IsNotEmpty()
  canal!: number;
}
