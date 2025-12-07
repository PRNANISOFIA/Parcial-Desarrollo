import { Email } from './value-objects/email.vo';
import { UserId } from './value-objects/user-id.vo';
import { UserName } from './value-objects/user-name.vo';
import { User } from './user.entity';

export abstract class UserRepository {
  abstract findById(id: UserId): Promise<User | null>;
  abstract findByEmail(email: Email): Promise<User | null>;
  abstract findByUserName(userName: UserName): Promise<User | null>;
  abstract findAll(): Promise<User[]>;
  abstract save(user: User): Promise<void>;
  abstract delete(id: UserId): Promise<void>;
}

