import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateUserRequest {
  @ApiProperty({ example: 'jdoe' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  userName!: string;

  @ApiProperty({ example: 'jdoe@example.com' })
  @IsEmail()
  @MaxLength(255)
  email!: string;

  @ApiProperty({ example: 'Admin' })
  @IsString()
  @IsNotEmpty()
  role!: string;
}
