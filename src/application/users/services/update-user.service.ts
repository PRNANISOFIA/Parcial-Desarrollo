import { Injectable } from '@nestjs/common';
import { InvalidUserNameException, UserNotFoundException } from '../../../domain/users/exceptions';
import { Email } from '../../../domain/users/value-objects/email.vo';
import { Role } from '../../../domain/users/value-objects/role.vo';
import { UserId } from '../../../domain/users/value-objects/user-id.vo';
import { UserName } from '../../../domain/users/value-objects/user-name.vo';
import { UpdateUserCommand } from '../dto/command/update-user.command';
import { UserResponse } from '../dto/response/user.response';
import { UserMapper } from '../mapper/user.mapper';
import { IUpdateUserUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';

@Injectable()
export class UpdateUserService implements IUpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: UpdateUserCommand): Promise<UserResponse> {
    const id = UserId.from(command.id);
    const user = await this.userRepository.findById(id);
    if (!user) throw new UserNotFoundException();

    const newUserName = new UserName(command.userName);
    const newEmail = new Email(command.email);
    const newRole = new Role(command.role);

    const duplicateUserName = await this.userRepository.findByUserName(newUserName);
    if (duplicateUserName && duplicateUserName.id.value !== user.id.value) {
      throw new InvalidUserNameException('El nombre de usuario ya está en uso');
    }

    user.rename(newUserName);
    user.updateEmail(newEmail);
    user.assignRole(newRole);

    await this.userRepository.save(user);
    return UserMapper.toResponse(user);
  }
}

