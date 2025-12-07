import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IDeleteEmisoraUseCase } from '../ports/in/emisora.use-cases';
import { DeleteEmisoraCommand } from '../dto/command/delete-emisora.command';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';

@Injectable()
export class DeleteEmisoraService implements IDeleteEmisoraUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: DeleteEmisoraCommand): Promise<void> {
    await this.emisoraRepository.delete(EmisoraId.from(command.id));
  }
}
