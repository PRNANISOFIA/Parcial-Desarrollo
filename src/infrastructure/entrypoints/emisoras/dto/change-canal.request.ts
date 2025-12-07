import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class ChangeCanalRequest {
  @ApiProperty({ example: 105 })
  @IsNumber()
  @Min(1)
  canal!: number;
}
