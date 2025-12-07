import { Injectable } from '@nestjs/common';
import { UserId } from '../../../domain/users/value-objects/user-id.vo';
import { DeleteUserCommand } from '../dto/command/delete-user.command';
import { IDeleteUserUseCase } from '../ports/in/user.use-cases';
import { UserRepository } from '../ports/out/user.ports';

@Injectable()
export class DeleteUserService implements IDeleteUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(command: DeleteUserCommand): Promise<void> {
    const id = UserId.from(command.id);
    await this.userRepository.delete(id);
  }
}

