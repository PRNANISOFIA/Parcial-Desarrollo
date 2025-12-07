import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IListEmisorasUseCase } from '../ports/in/emisora.use-cases';
import { ListEmisorasQuery } from '../dto/query/list-emisoras.query';
import { EmisoraListResponse } from '../dto/response/emisora-list.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';

@Injectable()
export class ListEmisorasService implements IListEmisorasUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(query: ListEmisorasQuery): Promise<EmisoraListResponse> {
    let emisoras = await this.emisoraRepository.findAll();

    if (query.genero) {
      emisoras = emisoras.filter((e) => e.genero.value.toLowerCase() === query.genero!.toLowerCase());
    }
    if (query.pais) {
      emisoras = emisoras.filter((e) => e.pais.value.toLowerCase() === query.pais!.toLowerCase());
    }
    if (query.banda) {
      const banda = query.banda.toLowerCase();
      emisoras = emisoras.filter((e) =>
        banda === 'fm' ? e.banda.isFm() : banda === 'am' ? e.banda.isAm() : true,
      );
    }
    if (query.estado) {
      emisoras = emisoras.filter((e) => e.estado.value === query.estado!.toUpperCase());
    }
    if (query.searchTerm) {
      const term = query.searchTerm.toLowerCase();
      emisoras = emisoras.filter(
        (e) =>
          e.nombre.value.toLowerCase().includes(term) ||
          e.descripcion.value.toLowerCase().includes(term) ||
          e.genero.value.toLowerCase().includes(term),
      );
    }

    const total = emisoras.length;
    const start = (query.page - 1) * query.pageSize;
    const paged = emisoras.slice(start, start + query.pageSize);

    return EmisoraMapper.toList(paged, total, query.page, query.pageSize);
  }
}
