import { Injectable } from '@nestjs/common';
import { ListUsersQuery } from '../dto/query/list-users.query';
import { UserListResponse } from '../dto/response/user-list.response';
import { UserMapper } from '../mapper/user.mapper';
import { IListUsersUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';

@Injectable()
export class ListUsersService implements IListUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(query: ListUsersQuery): Promise<UserListResponse> {
    const users = await this.userRepository.findAll();

    let filtered = users;
    if (query.isActive !== undefined) {
      filtered = filtered.filter((u) => u.isActive === query.isActive);
    }
    if (query.role) {
      filtered = filtered.filter((u) => u.role.value.toLowerCase() === query.role!.toLowerCase());
    }
    if (query.searchTerm) {
      const term = query.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (u) =>
          u.userName.value.toLowerCase().includes(term) ||
          u.email.value.toLowerCase().includes(term),
      );
    }

    const total = filtered.length;
    const start = (query.page - 1) * query.pageSize;
    const paged = filtered.slice(start, start + query.pageSize);

    return UserMapper.toList(paged, total, query.page, query.pageSize);
  }
}

