import { ApiProperty } from '@nestjs/swagger';
import { UserResponse } from './user.response';

export class LoginResponse {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  token!: string;
  @ApiProperty({ example: '2025-01-01T13:00:00Z' })
  expiresAt!: Date;
  @ApiProperty({ type: () => UserResponse })
  user!: UserResponse;
}
