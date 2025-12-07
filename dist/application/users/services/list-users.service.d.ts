import { ListUsersQuery } from '../dto/query/list-users.query';
import { UserListResponse } from '../dto/response/user-list.response';
import { IListUsersUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';
export declare class ListUsersService implements IListUsersUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(query: ListUsersQuery): Promise<UserListResponse>;
}
