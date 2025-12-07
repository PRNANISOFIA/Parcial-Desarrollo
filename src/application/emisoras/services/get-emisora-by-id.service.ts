import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IGetEmisoraByIdUseCase } from '../ports/in/emisora.use-cases';
import { GetEmisoraByIdQuery } from '../dto/query/get-emisora-by-id.query';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';

@Injectable()
export class GetEmisoraByIdService implements IGetEmisoraByIdUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(query: GetEmisoraByIdQuery): Promise<EmisoraResponse | null> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(query.id));
    return emisora ? EmisoraMapper.toResponse(emisora) : null;
  }
}
