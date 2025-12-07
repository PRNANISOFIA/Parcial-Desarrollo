import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({ example: '6c47e5dc-4575-4a0c-8b85-0b7358a11111' })
  id!: string;
  @ApiProperty({ example: 'jdoe' })
  userName!: string;
  @ApiProperty({ example: 'jdoe@example.com' })
  email!: string;
  @ApiProperty({ example: 'User' })
  role!: string;
  @ApiProperty({ example: true })
  isActive!: boolean;
  @ApiProperty({ example: '2025-01-01T12:00:00Z' })
  createdAt!: Date;
  @ApiProperty({ example: '2025-01-10T12:00:00Z', nullable: true })
  updatedAt?: Date | null;
}
