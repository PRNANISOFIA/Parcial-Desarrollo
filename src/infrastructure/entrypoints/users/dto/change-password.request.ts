import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ChangePasswordRequest {
  @ApiProperty({ example: 'OldP@ssw0rd!' })
  @IsString()
  @IsNotEmpty()
  currentPassword!: string;

  @ApiProperty({ example: 'NewP@ssw0rd!' })
  @IsString()
  @MinLength(8)
  newPassword!: string;
}
