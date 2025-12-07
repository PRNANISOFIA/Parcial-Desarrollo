import { Emisora } from '../../../domain/emisoras/emisora.entity';
import { EmisoraListResponse } from '../dto/response/emisora-list.response';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class EmisoraMapper {
    static toResponse(emisora: Emisora): EmisoraResponse;
    static toList(emisoras: Emisora[], total: number, page: number, pageSize: number): EmisoraListResponse;
}
