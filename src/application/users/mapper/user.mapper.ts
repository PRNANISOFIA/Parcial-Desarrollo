import { User } from '../../../domain/users/user.entity';
import { UserListResponse } from '../dto/response/user-list.response';
import { UserResponse } from '../dto/response/user.response';

export class UserMapper {
  static toResponse(user: User): UserResponse {
    return {
      id: user.id.value,
      userName: user.userName.value,
      email: user.email.value,
      role: user.role.value,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt ?? undefined,
    };
  }

  static toList(users: User[], total: number, page: number, pageSize: number): UserListResponse {
    return {
      users: users.map(UserMapper.toResponse),
      totalCount: total,
      page,
      pageSize,
    };
  }
}

