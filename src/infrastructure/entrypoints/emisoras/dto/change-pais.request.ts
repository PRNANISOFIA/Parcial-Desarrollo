import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ChangePaisRequest {
  @ApiProperty({ example: 'Colombia' })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  pais!: string;
}
