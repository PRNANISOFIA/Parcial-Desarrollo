import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from '../../../../domain/users/user.repository';
import { Email } from '../../../../domain/users/value-objects/email.vo';
import { PasswordHash } from '../../../../domain/users/value-objects/password-hash.vo';
import { Role } from '../../../../domain/users/value-objects/role.vo';
import { UserId } from '../../../../domain/users/value-objects/user-id.vo';
import { UserName } from '../../../../domain/users/value-objects/user-name.vo';
import { User } from '../../../../domain/users/user.entity';
import { UserOrmEntity } from '../entities/user.orm-entity';

@Injectable()
export class UserTypeOrmRepository implements UserRepository {
  constructor(@InjectRepository(UserOrmEntity) private readonly repo: Repository<UserOrmEntity>) {}

  async findById(id: UserId): Promise<User | null> {
    const model = await this.repo.findOne({ where: { id: id.value } });
    return model ? this.toDomain(model) : null;
  }

  async findByEmail(email: Email): Promise<User | null> {
    const model = await this.repo.findOne({ where: { email: email.value } });
    return model ? this.toDomain(model) : null;
  }

  async findByUserName(userName: UserName): Promise<User | null> {
    const model = await this.repo.findOne({ where: { userName: userName.value } });
    return model ? this.toDomain(model) : null;
  }

  async findAll(): Promise<User[]> {
    const models = await this.repo.find();
    return models.map((m) => this.toDomain(m));
  }

  async save(user: User): Promise<void> {
    const model = this.toOrm(user);
    await this.repo.save(model);
  }

  async delete(id: UserId): Promise<void> {
    await this.repo.delete({ id: id.value });
  }

  private toDomain(model: UserOrmEntity): User {
    return User.restore(
      UserId.from(model.id),
      new UserName(model.userName),
      new Email(model.email),
      new PasswordHash(model.passwordHash),
      new Role(model.role),
      model.isActive,
      model.createdAt,
      model.updatedAt,
    );
  }

  private toOrm(user: User): UserOrmEntity {
    return {
      id: user.id.value,
      userName: user.userName.value,
      email: user.email.value,
      passwordHash: user.passwordHash.value,
      role: user.role.value,
      isActive: user.isActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt ?? null,
    };
  }
}
