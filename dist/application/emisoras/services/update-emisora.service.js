"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateEmisoraService = void 0;
const common_1 = require("@nestjs/common");
const emisora_repository_1 = require("../../../domain/emisoras/emisora.repository");
const emisora_mapper_1 = require("../mapper/emisora.mapper");
const emisora_id_vo_1 = require("../../../domain/emisoras/value-objects/emisora-id.vo");
const exceptions_1 = require("../../../domain/emisoras/exceptions");
const canal_vo_1 = require("../../../domain/emisoras/value-objects/canal.vo");
const banda_vo_1 = require("../../../domain/emisoras/value-objects/banda.vo");
const numero_locutores_vo_1 = require("../../../domain/emisoras/value-objects/numero-locutores.vo");
const genero_vo_1 = require("../../../domain/emisoras/value-objects/genero.vo");
const horario_vo_1 = require("../../../domain/emisoras/value-objects/horario.vo");
const patrocinador_vo_1 = require("../../../domain/emisoras/value-objects/patrocinador.vo");
const pais_vo_1 = require("../../../domain/emisoras/value-objects/pais.vo");
const descripcion_vo_1 = require("../../../domain/emisoras/value-objects/descripcion.vo");
const programacion_entity_1 = require("../../../domain/emisoras/programacion.entity");
const cobertura_entity_1 = require("../../../domain/emisoras/cobertura.entity");
const estado_emisora_vo_1 = require("../../../domain/emisoras/value-objects/estado-emisora.vo");
let UpdateEmisoraService = class UpdateEmisoraService {
    emisoraRepository;
    constructor(emisoraRepository) {
        this.emisoraRepository = emisoraRepository;
    }
    async execute(command) {
        const emisora = await this.emisoraRepository.findById(emisora_id_vo_1.EmisoraId.from(command.id));
        if (!emisora) {
            throw new exceptions_1.EmisoraNotFoundException();
        }
        emisora.actualizar({
            canal: command.canal !== undefined ? new canal_vo_1.Canal(command.canal) : undefined,
            banda: command.bandaAm !== undefined || command.bandaFm !== undefined
                ? new banda_vo_1.Banda(command.bandaFm ?? null, command.bandaAm ?? null)
                : undefined,
            numLocutores: command.numLocutores !== undefined ? new numero_locutores_vo_1.NumeroLocutores(command.numLocutores) : undefined,
            genero: command.genero ? new genero_vo_1.Genero(command.genero) : undefined,
            horario: command.horario ? new horario_vo_1.Horario(command.horario) : undefined,
            patrocinador: command.patrocinador !== undefined
                ? command.patrocinador
                    ? new patrocinador_vo_1.Patrocinador(command.patrocinador)
                    : null
                : undefined,
            pais: command.pais ? new pais_vo_1.Pais(command.pais) : undefined,
            descripcion: command.descripcion ? new descripcion_vo_1.Descripcion(command.descripcion) : undefined,
            programacion: command.numProgramas !== undefined ? new programacion_entity_1.Programacion(command.numProgramas) : undefined,
            cobertura: command.numCiudades !== undefined ? new cobertura_entity_1.Cobertura(command.numCiudades) : undefined,
            estado: command.estado ? new estado_emisora_vo_1.EstadoEmisora(command.estado) : undefined,
        });
        await this.emisoraRepository.save(emisora);
        return emisora_mapper_1.EmisoraMapper.toResponse(emisora);
    }
};
exports.UpdateEmisoraService = UpdateEmisoraService;
exports.UpdateEmisoraService = UpdateEmisoraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [emisora_repository_1.EmisoraRepository])
], UpdateEmisoraService);
//# sourceMappingURL=update-emisora.service.js.map