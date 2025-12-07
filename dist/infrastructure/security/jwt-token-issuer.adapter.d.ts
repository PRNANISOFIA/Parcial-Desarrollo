import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { TokenIssuerPort } from '../../application/users/ports/out/user.ports';
import { Role } from '../../domain/users/value-objects/role.vo';
import { UserId } from '../../domain/users/value-objects/user-id.vo';
import { UserName } from '../../domain/users/value-objects/user-name.vo';
import { TokenBlacklistOrmEntity } from '../persistence/typeorm/entities/token-blacklist.orm-entity';
export declare class JwtTokenIssuerAdapter implements TokenIssuerPort {
    private readonly jwtService;
    private readonly tokenBlacklistRepo;
    private readonly expirationSeconds;
    constructor(jwtService: JwtService, tokenBlacklistRepo: Repository<TokenBlacklistOrmEntity>);
    generateToken(userId: UserId, userName: UserName, role: Role): string;
    expiresInSeconds(): number;
    validate(token: string): Promise<boolean>;
    revoke(token: string): Promise<void>;
}
