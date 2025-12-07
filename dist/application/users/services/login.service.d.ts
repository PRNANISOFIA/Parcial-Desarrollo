import { LoginCommand } from '../dto/command/login.command';
import { LoginResponse } from '../dto/response/login.response';
import { ILoginUseCase } from '../ports/in/user.use-cases';
import { PasswordHasherPort, TokenIssuerPort, UserRepository } from '../ports/out/user.ports';
export declare class LoginService implements ILoginUseCase {
    private readonly userRepository;
    private readonly passwordHasher;
    private readonly tokenIssuer;
    constructor(userRepository: UserRepository, passwordHasher: PasswordHasherPort, tokenIssuer: TokenIssuerPort);
    execute(command: LoginCommand): Promise<LoginResponse>;
}
