import { CreateUserCommand } from '../dto/command/create-user.command';
import { UserResponse } from '../dto/response/user.response';
import { ICreateUserUseCase } from '../ports/in/user.use-cases';
import { PasswordHasherPort, PasswordStrengthPolicyPort, UserRepository } from '../ports/out/user.ports';
export declare class CreateUserService implements ICreateUserUseCase {
    private readonly userRepository;
    private readonly passwordHasher;
    private readonly passwordStrengthPolicy;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasherPort, passwordStrengthPolicy: PasswordStrengthPolicyPort);
    execute(command: CreateUserCommand): Promise<UserResponse>;
}
