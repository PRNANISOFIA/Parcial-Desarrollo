import { User } from '../../../domain/users/user.entity';
import { UserListResponse } from '../dto/response/user-list.response';
import { UserResponse } from '../dto/response/user.response';
export declare class UserMapper {
    static toResponse(user: User): UserResponse;
    static toList(users: User[], total: number, page: number, pageSize: number): UserListResponse;
}
