import { Injectable, Logger } from '@nestjs/common';
import { Email } from '../../../domain/users/value-objects/email.vo';
import { RequestPasswordResetCommand } from '../dto/command/request-password-reset.command';
import { IRequestPasswordResetUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';

@Injectable()
export class RequestPasswordResetService implements IRequestPasswordResetUseCase {
  private readonly logger = new Logger(RequestPasswordResetService.name);

  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: RequestPasswordResetCommand): Promise<void> {
    const email = new Email(command.email);
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      // no filtra información; se silencian usuarios no encontrados
      return;
    }
    this.logger.log(`Solicitud de reset de contraseña para ${email.value}`);
  }
}

