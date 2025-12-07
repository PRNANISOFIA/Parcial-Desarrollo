import { ILogoutUseCase } from '../ports/in/user.use-cases';
import { TokenIssuerPort } from '../ports/out/user.ports';
export declare class LogoutService implements ILogoutUseCase {
    private readonly tokenIssuer;
    constructor(tokenIssuer: TokenIssuerPort);
    execute(token: string): Promise<void>;
}
