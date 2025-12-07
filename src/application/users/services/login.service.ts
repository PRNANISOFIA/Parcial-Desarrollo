import { Injectable } from '@nestjs/common';
import { InvalidPasswordException, UserNotFoundException } from '../../../domain/users/exceptions';
import { Email } from '../../../domain/users/value-objects/email.vo';
import { LoginCommand } from '../dto/command/login.command';
import { LoginResponse } from '../dto/response/login.response';
import { UserMapper } from '../mapper/user.mapper';
import { ILoginUseCase } from '../ports/in/user.use-cases';
import { PasswordHasherPort, TokenIssuerPort, UserRepository } from '../ports/out/user.ports';

@Injectable()
export class LoginService implements ILoginUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordHasher: PasswordHasherPort,
    private readonly tokenIssuer: TokenIssuerPort,
  ) {}

  async execute(command: LoginCommand): Promise<LoginResponse> {
    const email = new Email(command.email);
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new UserNotFoundException('Credenciales invalidas');
    }
    if (!user.isActive) {
      throw new UserNotFoundException('Usuario inactivo');
    }

    const isValid = await this.passwordHasher.verify(command.password, user.passwordHash.value);
    if (!isValid) {
      throw new InvalidPasswordException('Credenciales invalidas');
    }

    const token = this.tokenIssuer.generateToken(user.id, user.userName, user.role);
    const expiresInSeconds = this.tokenIssuer.expiresInSeconds();

    return {
      token,
      expiresAt: new Date(Date.now() + expiresInSeconds * 1000),
      user: UserMapper.toResponse(user),
    };
  }
}
