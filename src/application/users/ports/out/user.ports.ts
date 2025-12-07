import { Email } from '../../../../domain/users/value-objects/email.vo';
import { PasswordHash } from '../../../../domain/users/value-objects/password-hash.vo';
import { Role } from '../../../../domain/users/value-objects/role.vo';
import { UserId } from '../../../../domain/users/value-objects/user-id.vo';
import { UserName } from '../../../../domain/users/value-objects/user-name.vo';
import { User } from '../../../../domain/users/user.entity';
import { UserRepository } from '../../../../domain/users/user.repository';

export abstract class PasswordHasherPort {
  abstract hash(password: string): Promise<string>;
  abstract verify(password: string, hash: string): Promise<boolean>;
}

export abstract class PasswordStrengthPolicyPort {
  abstract isStrong(password: string): boolean;
  abstract messageFor(password: string): string;
}

export abstract class TokenIssuerPort {
  abstract generateToken(userId: UserId, userName: UserName, role: Role): string;
  abstract expiresInSeconds(): number;
  abstract validate(token: string): Promise<boolean>;
  abstract revoke(token: string): Promise<void>;
}

export abstract class UnitOfWorkPort {
  abstract execute<T>(work: () => Promise<T>): Promise<T>;
}

export { UserRepository };
