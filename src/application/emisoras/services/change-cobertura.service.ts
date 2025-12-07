import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeCoberturaUseCase } from '../ports/in/emisora.use-cases';
import { ChangeCoberturaCommand } from '../dto/command/change-cobertura.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EmisoraNotFoundException } from '../../../domain/emisoras/exceptions';

@Injectable()
export class ChangeCoberturaService implements IChangeCoberturaUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: ChangeCoberturaCommand): Promise<EmisoraResponse> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(command.id));
    if (!emisora) {
      throw new EmisoraNotFoundException();
    }
    emisora.cambiarCobertura(command.numCiudades);
    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
