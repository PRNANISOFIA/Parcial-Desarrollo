import { Repository } from 'typeorm';
import { UserRepository } from '../../../../domain/users/user.repository';
import { Email } from '../../../../domain/users/value-objects/email.vo';
import { UserId } from '../../../../domain/users/value-objects/user-id.vo';
import { UserName } from '../../../../domain/users/value-objects/user-name.vo';
import { User } from '../../../../domain/users/user.entity';
import { UserOrmEntity } from '../entities/user.orm-entity';
export declare class UserTypeOrmRepository implements UserRepository {
    private readonly repo;
    constructor(repo: Repository<UserOrmEntity>);
    findById(id: UserId): Promise<User | null>;
    findByEmail(email: Email): Promise<User | null>;
    findByUserName(userName: UserName): Promise<User | null>;
    findAll(): Promise<User[]>;
    save(user: User): Promise<void>;
    delete(id: UserId): Promise<void>;
    private toDomain;
    private toOrm;
}
