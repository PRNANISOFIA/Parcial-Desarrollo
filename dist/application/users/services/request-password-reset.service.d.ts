import { RequestPasswordResetCommand } from '../dto/command/request-password-reset.command';
import { IRequestPasswordResetUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';
export declare class RequestPasswordResetService implements IRequestPasswordResetUseCase {
    private readonly userRepository;
    private readonly logger;
    constructor(userRepository: UserRepository);
    execute(command: RequestPasswordResetCommand): Promise<void>;
}
