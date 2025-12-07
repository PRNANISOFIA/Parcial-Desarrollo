import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, Min } from 'class-validator';

export class ChangeProgramasRequest {
  @ApiProperty({ example: 8 })
  @IsNumber()
  @Min(1)
  numProgramas!: number;
}
