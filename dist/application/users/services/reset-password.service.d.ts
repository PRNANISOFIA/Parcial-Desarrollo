import { ResetPasswordCommand } from '../dto/command/reset-password.command';
import { IResetPasswordUseCase } from '../ports/in/user.use-cases';
import { PasswordHasherPort, PasswordStrengthPolicyPort, UserRepository } from '../ports/out/user.ports';
export declare class ResetPasswordService implements IResetPasswordUseCase {
    private readonly userRepository;
    private readonly passwordHasher;
    private readonly passwordStrengthPolicy;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasherPort, passwordStrengthPolicy: PasswordStrengthPolicyPort);
    execute(command: ResetPasswordCommand): Promise<void>;
}
