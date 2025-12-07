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
exports.CreateEmisoraService = void 0;
const common_1 = require("@nestjs/common");
const emisora_repository_1 = require("../../../domain/emisoras/emisora.repository");
const emisora_entity_1 = require("../../../domain/emisoras/emisora.entity");
const banda_vo_1 = require("../../../domain/emisoras/value-objects/banda.vo");
const canal_vo_1 = require("../../../domain/emisoras/value-objects/canal.vo");
const descripcion_vo_1 = require("../../../domain/emisoras/value-objects/descripcion.vo");
const genero_vo_1 = require("../../../domain/emisoras/value-objects/genero.vo");
const horario_vo_1 = require("../../../domain/emisoras/value-objects/horario.vo");
const nombre_emisora_vo_1 = require("../../../domain/emisoras/value-objects/nombre-emisora.vo");
const numero_locutores_vo_1 = require("../../../domain/emisoras/value-objects/numero-locutores.vo");
const pais_vo_1 = require("../../../domain/emisoras/value-objects/pais.vo");
const patrocinador_vo_1 = require("../../../domain/emisoras/value-objects/patrocinador.vo");
const cobertura_entity_1 = require("../../../domain/emisoras/cobertura.entity");
const programacion_entity_1 = require("../../../domain/emisoras/programacion.entity");
const emisora_mapper_1 = require("../mapper/emisora.mapper");
const exceptions_1 = require("../../../domain/emisoras/exceptions");
let CreateEmisoraService = class CreateEmisoraService {
    emisoraRepository;
    constructor(emisoraRepository) {
        this.emisoraRepository = emisoraRepository;
    }
    async execute(command) {
        const nombre = new nombre_emisora_vo_1.NombreEmisora(command.nombre);
        const existente = await this.emisoraRepository.findByNombre(nombre);
        if (existente) {
            throw new exceptions_1.NombreEmisoraDuplicadoException(command.nombre);
        }
        const emisora = emisora_entity_1.Emisora.create(nombre, new canal_vo_1.Canal(command.canal), new banda_vo_1.Banda(command.bandaFm ?? null, command.bandaAm ?? null), new numero_locutores_vo_1.NumeroLocutores(command.numLocutores), new genero_vo_1.Genero(command.genero), new horario_vo_1.Horario(command.horario), new pais_vo_1.Pais(command.pais), new descripcion_vo_1.Descripcion(command.descripcion), new programacion_entity_1.Programacion(command.numProgramas), new cobertura_entity_1.Cobertura(command.numCiudades), command.patrocinador ? new patrocinador_vo_1.Patrocinador(command.patrocinador) : null);
        await this.emisoraRepository.save(emisora);
        return emisora_mapper_1.EmisoraMapper.toResponse(emisora);
    }
};
exports.CreateEmisoraService = CreateEmisoraService;
exports.CreateEmisoraService = CreateEmisoraService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [emisora_repository_1.EmisoraRepository])
], CreateEmisoraService);
//# sourceMappingURL=create-emisora.service.js.map