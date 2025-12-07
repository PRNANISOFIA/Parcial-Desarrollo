import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangePaisUseCase } from '../ports/in/emisora.use-cases';
import { ChangePaisCommand } from '../dto/command/change-pais.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EmisoraNotFoundException } from '../../../domain/emisoras/exceptions';
import { Pais } from '../../../domain/emisoras/value-objects/pais.vo';

@Injectable()
export class ChangePaisService implements IChangePaisUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: ChangePaisCommand): Promise<EmisoraResponse> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(command.id));
    if (!emisora) {
      throw new EmisoraNotFoundException();
    }
    emisora.cambiarPais(new Pais(command.pais));
    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
