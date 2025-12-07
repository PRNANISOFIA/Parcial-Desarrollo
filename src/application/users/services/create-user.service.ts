import { Injectable } from '@nestjs/common';
import { EmailAlreadyExistsException, InvalidPasswordException, InvalidUserNameException } from '../../../domain/users/exceptions';
import { Email } from '../../../domain/users/value-objects/email.vo';
import { PasswordHash } from '../../../domain/users/value-objects/password-hash.vo';
import { Role } from '../../../domain/users/value-objects/role.vo';
import { UserName } from '../../../domain/users/value-objects/user-name.vo';
import { User } from '../../../domain/users/user.entity';
import { CreateUserCommand } from '../dto/command/create-user.command';
import { UserResponse } from '../dto/response/user.response';
import { UserMapper } from '../mapper/user.mapper';
import { ICreateUserUseCase } from '../ports/in/user.use-cases';
import {
  PasswordHasherPort,
  PasswordStrengthPolicyPort,
  UserRepository,
} from '../ports/out/user.ports';

@Injectable()
export class CreateUserService implements ICreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasherPort,
    private readonly passwordStrengthPolicy: PasswordStrengthPolicyPort,
  ) {}

  async execute(command: CreateUserCommand): Promise<UserResponse> {
    if (!this.passwordStrengthPolicy.isStrong(command.password)) {
      throw new InvalidPasswordException(this.passwordStrengthPolicy.messageFor(command.password));
    }

    const userName = new UserName(command.userName);
    const email = new Email(command.email);
    const role = new Role(command.role);

    const existingEmail = await this.userRepository.findByEmail(email);
    if (existingEmail) {
      throw new EmailAlreadyExistsException(email.value);
    }

    const existingUserName = await this.userRepository.findByUserName(userName);
    if (existingUserName) {
      throw new InvalidUserNameException('El nombre de usuario ya está en uso');
    }

    const passwordHash = new PasswordHash(await this.passwordHasher.hash(command.password));
    const user = User.create(userName, email, passwordHash, role);

    await this.userRepository.save(user);

    return UserMapper.toResponse(user);
  }
}

