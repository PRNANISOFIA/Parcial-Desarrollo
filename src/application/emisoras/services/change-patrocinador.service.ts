import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangePatrocinadorUseCase } from '../ports/in/emisora.use-cases';
import { ChangePatrocinadorCommand } from '../dto/command/change-patrocinador.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EmisoraNotFoundException } from '../../../domain/emisoras/exceptions';
import { Patrocinador } from '../../../domain/emisoras/value-objects/patrocinador.vo';

@Injectable()
export class ChangePatrocinadorService implements IChangePatrocinadorUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: ChangePatrocinadorCommand): Promise<EmisoraResponse> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(command.id));
    if (!emisora) {
      throw new EmisoraNotFoundException();
    }
    const patrocinador =
      command.patrocinador !== undefined
        ? command.patrocinador
          ? new Patrocinador(command.patrocinador)
          : null
        : emisora.patrocinador;
    emisora.cambiarPatrocinador(patrocinador ?? null);
    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
