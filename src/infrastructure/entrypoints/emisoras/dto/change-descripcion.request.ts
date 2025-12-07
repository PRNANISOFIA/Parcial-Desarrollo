import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class ChangeDescripcionRequest {
  @ApiProperty({ example: 'Nueva descripción detallada de la emisora' })
  @IsString()
  @MinLength(20)
  @MaxLength(300)
  descripcion!: string;
}
