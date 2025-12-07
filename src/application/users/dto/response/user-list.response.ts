import { ApiProperty } from '@nestjs/swagger';
import { UserResponse } from './user.response';

export class UserListResponse {
  @ApiProperty({ type: [UserResponse] })
  users!: UserResponse[];
  @ApiProperty({ example: 1 })
  totalCount!: number;
  @ApiProperty({ example: 1 })
  page!: number;
  @ApiProperty({ example: 10 })
  pageSize!: number;
}
