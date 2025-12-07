import { DeleteUserCommand } from '../dto/command/delete-user.command';
import { IDeleteUserUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';
export declare class DeleteUserService implements IDeleteUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(command: DeleteUserCommand): Promise<void>;
}
