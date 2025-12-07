import { CanActivate, ExecutionContext } from '@nestjs/common';
import { TokenIssuerPort } from '../../application/users/ports/out/user.ports';
export declare class JwtAuthGuard implements CanActivate {
    private readonly tokenIssuer;
    constructor(tokenIssuer: TokenIssuerPort);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
