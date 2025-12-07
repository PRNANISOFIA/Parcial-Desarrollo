import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeGeneroUseCase } from '../ports/in/emisora.use-cases';
import { ChangeGeneroCommand } from '../dto/command/change-genero.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EmisoraNotFoundException } from '../../../domain/emisoras/exceptions';
import { Genero } from '../../../domain/emisoras/value-objects/genero.vo';

@Injectable()
export class ChangeGeneroService implements IChangeGeneroUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: ChangeGeneroCommand): Promise<EmisoraResponse> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(command.id));
    if (!emisora) {
      throw new EmisoraNotFoundException();
    }
    emisora.cambiarGenero(new Genero(command.genero));
    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
