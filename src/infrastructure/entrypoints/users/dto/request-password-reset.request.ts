import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class RequestPasswordResetRequest {
  @ApiProperty({ example: 'jdoe@example.com' })
  @IsEmail()
  email!: string;
}
