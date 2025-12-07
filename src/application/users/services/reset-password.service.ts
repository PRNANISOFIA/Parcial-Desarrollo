import { Injectable } from '@nestjs/common';
import { InvalidPasswordException, UserNotFoundException } from '../../../domain/users/exceptions';
import { Email } from '../../../domain/users/value-objects/email.vo';
import { PasswordHash } from '../../../domain/users/value-objects/password-hash.vo';
import { ResetPasswordCommand } from '../dto/command/reset-password.command';
import { IResetPasswordUseCase } from '../ports/in/user.use-cases';
import {
  PasswordHasherPort,
  PasswordStrengthPolicyPort,
  UserRepository,
} from '../ports/out/user.ports';

@Injectable()
export class ResetPasswordService implements IResetPasswordUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasherPort,
    private readonly passwordStrengthPolicy: PasswordStrengthPolicyPort,
  ) {}

  async execute(command: ResetPasswordCommand): Promise<void> {
    const email = new Email(command.email);
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new UserNotFoundException();

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

