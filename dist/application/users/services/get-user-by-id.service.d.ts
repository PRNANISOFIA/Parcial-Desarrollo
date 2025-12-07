import { GetUserByIdQuery } from '../dto/query/get-user-by-id.query';
import { UserResponse } from '../dto/response/user.response';
import { IGetUserByIdUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';
export declare class GetUserByIdService implements IGetUserByIdUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(query: GetUserByIdQuery): Promise<UserResponse | null>;
}
