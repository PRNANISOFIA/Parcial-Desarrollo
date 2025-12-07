import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeBandaUseCase } from '../ports/in/emisora.use-cases';
import { ChangeBandaCommand } from '../dto/command/change-banda.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EmisoraNotFoundException } from '../../../domain/emisoras/exceptions';
import { Banda } from '../../../domain/emisoras/value-objects/banda.vo';
import { Canal } from '../../../domain/emisoras/value-objects/canal.vo';

@Injectable()
export class ChangeBandaService implements IChangeBandaUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: ChangeBandaCommand): Promise<EmisoraResponse> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(command.id));
    if (!emisora) {
      throw new EmisoraNotFoundException();
    }

    emisora.cambiarBanda(new Banda(command.bandaFm ?? null, command.bandaAm ?? null), new Canal(command.canal));

    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
