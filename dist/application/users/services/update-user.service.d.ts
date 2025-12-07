import { UpdateUserCommand } from '../dto/command/update-user.command';
import { UserResponse } from '../dto/response/user.response';
import { IUpdateUserUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';
export declare class UpdateUserService implements IUpdateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(command: UpdateUserCommand): Promise<UserResponse>;
}
