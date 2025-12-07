import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserRequest {
  @ApiProperty({ example: 'jdoe' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  userName!: string;

  @ApiProperty({ example: 'jdoe@example.com' })
  @IsEmail()
  @MaxLength(255)
  email!: string;

  @ApiProperty({ example: 'P@ssw0rd!' })
  @IsString()
  @MinLength(8)
  password!: string;

  @ApiProperty({ example: 'User' })
  @IsString()
  @IsNotEmpty()
  role!: string;
}
