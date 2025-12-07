import { EmisoraResponse } from './emisora.response';
export interface EmisoraListResponse {
    emisoras: EmisoraResponse[];
    totalCount: number;
    page: number;
    pageSize: number;
}
