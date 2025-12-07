import { Injectable } from '@nestjs/common';
import { InvalidPasswordException, UserNotFoundException } from '../../../domain/users/exceptions';
import { PasswordHash } from '../../../domain/users/value-objects/password-hash.vo';
import { UserId } from '../../../domain/users/value-objects/user-id.vo';
import { ChangePasswordCommand } from '../dto/command/change-password.command';
import { IChangePasswordUseCase } from '../ports/in/user.use-cases';
import {
  PasswordHasherPort,
  PasswordStrengthPolicyPort,
  UserRepository,
} from '../ports/out/user.ports';

@Injectable()
export class ChangePasswordService implements IChangePasswordUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasherPort,
    private readonly passwordStrengthPolicy: PasswordStrengthPolicyPort,
  ) {}

  async execute(command: ChangePasswordCommand): Promise<void> {
    const userId = UserId.from(command.id);
    const user = await this.userRepository.findById(userId);
    if (!user) throw new UserNotFoundException();

    const isCurrentValid = await this.passwordHasher.verify(
      command.currentPassword,
      user.passwordHash.value,
    );
    if (!isCurrentValid) {
      throw new InvalidPasswordException('La contraseña actual es incorrecta');
    }

    if (!this.passwordStrengthPolicy.isStrong(command.newPassword)) {
      throw new InvalidPasswordException(
        this.passwordStrengthPolicy.messageFor(command.newPassword),
      );
    }

    const newHash = new PasswordHash(await this.passwordHasher.hash(command.newPassword));
    user.changePassword(newHash);
    await this.userRepository.save(user);
  }
}

