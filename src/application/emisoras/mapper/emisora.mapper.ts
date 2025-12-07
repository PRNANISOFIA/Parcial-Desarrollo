import { Emisora } from '../../../domain/emisoras/emisora.entity';
import { EmisoraListResponse } from '../dto/response/emisora-list.response';
import { EmisoraResponse } from '../dto/response/emisora.response';

export class EmisoraMapper {
  static toResponse(emisora: Emisora): EmisoraResponse {
    return {
      id: emisora.id.value,
      nombre: emisora.nombre.value,
      canal: emisora.canal.value,
      bandaFm: emisora.banda.bandaFm ?? null,
      bandaAm: emisora.banda.bandaAm ?? null,
      numLocutores: emisora.numLocutores.value,
      genero: emisora.genero.value,
      horario: emisora.horario.value,
      patrocinador: emisora.patrocinador?.value ?? null,
      pais: emisora.pais.value,
      descripcion: emisora.descripcion.value,
      numProgramas: emisora.programacion.numProgramas,
      numCiudades: emisora.cobertura.numCiudades,
      estado: emisora.estado.value,
      createdAt: emisora.createdAt,
      updatedAt: emisora.updatedAt ?? null,
    };
  }

  static toList(emisoras: Emisora[], total: number, page: number, pageSize: number): EmisoraListResponse {
    return {
      emisoras: emisoras.map((e) => this.toResponse(e)),
      totalCount: total,
      page,
      pageSize,
    };
  }
}
