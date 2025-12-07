import { Role } from '../../../../domain/users/value-objects/role.vo';
import { UserId } from '../../../../domain/users/value-objects/user-id.vo';
import { UserName } from '../../../../domain/users/value-objects/user-name.vo';
import { UserRepository } from '../../../../domain/users/user.repository';
export declare abstract class PasswordHasherPort {
    abstract hash(password: string): Promise<string>;
    abstract verify(password: string, hash: string): Promise<boolean>;
}
export declare abstract class PasswordStrengthPolicyPort {
    abstract isStrong(password: string): boolean;
    abstract messageFor(password: string): string;
}
export declare abstract class TokenIssuerPort {
    abstract generateToken(userId: UserId, userName: UserName, role: Role): string;
    abstract expiresInSeconds(): number;
    abstract validate(token: string): Promise<boolean>;
    abstract revoke(token: string): Promise<void>;
}
export declare abstract class UnitOfWorkPort {
    abstract execute<T>(work: () => Promise<T>): Promise<T>;
}
export { UserRepository };
