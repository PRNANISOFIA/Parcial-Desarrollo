import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IListEmisorasUseCase } from '../ports/in/emisora.use-cases';
import { ListEmisorasQuery } from '../dto/query/list-emisoras.query';
import { EmisoraListResponse } from '../dto/response/emisora-list.response';
export declare class ListEmisorasService implements IListEmisorasUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(query: ListEmisorasQuery): Promise<EmisoraListResponse>;
}
