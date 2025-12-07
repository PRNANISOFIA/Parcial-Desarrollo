import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IGetEmisoraByIdUseCase } from '../ports/in/emisora.use-cases';
import { GetEmisoraByIdQuery } from '../dto/query/get-emisora-by-id.query';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class GetEmisoraByIdService implements IGetEmisoraByIdUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(query: GetEmisoraByIdQuery): Promise<EmisoraResponse | null>;
}
