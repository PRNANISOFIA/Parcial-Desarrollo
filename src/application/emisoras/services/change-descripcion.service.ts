import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeDescripcionUseCase } from '../ports/in/emisora.use-cases';
import { ChangeDescripcionCommand } from '../dto/command/change-descripcion.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EmisoraNotFoundException } from '../../../domain/emisoras/exceptions';
import { Descripcion } from '../../../domain/emisoras/value-objects/descripcion.vo';

@Injectable()
export class ChangeDescripcionService implements IChangeDescripcionUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: ChangeDescripcionCommand): Promise<EmisoraResponse> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(command.id));
    if (!emisora) {
      throw new EmisoraNotFoundException();
    }
    emisora.cambiarDescripcion(new Descripcion(command.descripcion));
    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
