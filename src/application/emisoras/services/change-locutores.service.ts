import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeLocutoresUseCase } from '../ports/in/emisora.use-cases';
import { ChangeLocutoresCommand } from '../dto/command/change-locutores.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EmisoraNotFoundException } from '../../../domain/emisoras/exceptions';
import { NumeroLocutores } from '../../../domain/emisoras/value-objects/numero-locutores.vo';

@Injectable()
export class ChangeLocutoresService implements IChangeLocutoresUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: ChangeLocutoresCommand): Promise<EmisoraResponse> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(command.id));
    if (!emisora) {
      throw new EmisoraNotFoundException();
    }
    emisora.cambiarLocutores(new NumeroLocutores(command.numLocutores));
    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
