import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class ResetPasswordRequest {
  @ApiProperty({ example: 'jdoe@example.com' })
  @IsEmail()
  email!: string;

  @ApiProperty({ example: 'NewP@ssw0rd!' })
  @IsString()
  @MinLength(8)
  newPassword!: string;

  @ApiPropertyOptional({ example: 'reset-token-123' })
  @IsOptional()
  @IsNotEmpty()
  token?: string;
}
