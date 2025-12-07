"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmisoraMapper = void 0;
class EmisoraMapper {
    static toResponse(emisora) {
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
    static toList(emisoras, total, page, pageSize) {
        return {
            emisoras: emisoras.map((e) => this.toResponse(e)),
            totalCount: total,
            page,
            pageSize,
        };
    }
}
exports.EmisoraMapper = EmisoraMapper;
//# sourceMappingURL=emisora.mapper.js.map