import { ChangePasswordCommand } from '../dto/command/change-password.command';
import { IChangePasswordUseCase } from '../ports/in/user.use-cases';
import { PasswordHasherPort, PasswordStrengthPolicyPort, UserRepository } from '../ports/out/user.ports';
export declare class ChangePasswordService implements IChangePasswordUseCase {
    private readonly userRepository;
    private readonly passwordHasher;
    private readonly passwordStrengthPolicy;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasherPort, passwordStrengthPolicy: PasswordStrengthPolicyPort);
    execute(command: ChangePasswordCommand): Promise<void>;
}
