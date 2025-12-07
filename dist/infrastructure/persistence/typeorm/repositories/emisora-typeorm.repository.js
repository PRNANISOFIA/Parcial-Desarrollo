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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmisoraTypeOrmRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const emisora_entity_1 = require("../../../../domain/emisoras/emisora.entity");
const emisora_id_vo_1 = require("../../../../domain/emisoras/value-objects/emisora-id.vo");
const nombre_emisora_vo_1 = require("../../../../domain/emisoras/value-objects/nombre-emisora.vo");
const canal_vo_1 = require("../../../../domain/emisoras/value-objects/canal.vo");
const banda_vo_1 = require("../../../../domain/emisoras/value-objects/banda.vo");
const numero_locutores_vo_1 = require("../../../../domain/emisoras/value-objects/numero-locutores.vo");
const genero_vo_1 = require("../../../../domain/emisoras/value-objects/genero.vo");
const horario_vo_1 = require("../../../../domain/emisoras/value-objects/horario.vo");
const patrocinador_vo_1 = require("../../../../domain/emisoras/value-objects/patrocinador.vo");
const pais_vo_1 = require("../../../../domain/emisoras/value-objects/pais.vo");
const descripcion_vo_1 = require("../../../../domain/emisoras/value-objects/descripcion.vo");
const programacion_entity_1 = require("../../../../domain/emisoras/programacion.entity");
const cobertura_entity_1 = require("../../../../domain/emisoras/cobertura.entity");
const estado_emisora_vo_1 = require("../../../../domain/emisoras/value-objects/estado-emisora.vo");
const emisora_orm_entity_1 = require("../entities/emisora.orm-entity");
let EmisoraTypeOrmRepository = class EmisoraTypeOrmRepository {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findById(id) {
        const model = await this.repo.findOne({ where: { id: id.value } });
        return model ? this.toDomain(model) : null;
    }
    async findByNombre(nombre) {
        const model = await this.repo.findOne({ where: { nombre: nombre.value } });
        return model ? this.toDomain(model) : null;
    }
    async findAll() {
        const models = await this.repo.find();
        return models.map((m) => this.toDomain(m));
    }
    async save(emisora) {
        await this.repo.save(this.toOrm(emisora));
    }
    async delete(id) {
        await this.repo.delete({ id: id.value });
    }
    toDomain(model) {
        return emisora_entity_1.Emisora.restore(emisora_id_vo_1.EmisoraId.from(model.id), new nombre_emisora_vo_1.NombreEmisora(model.nombre), new canal_vo_1.Canal(model.canal), new banda_vo_1.Banda(model.bandaFm ?? null, model.bandaAm ?? null), new numero_locutores_vo_1.NumeroLocutores(model.numLocutores), new genero_vo_1.Genero(model.genero), new horario_vo_1.Horario(this.toHorarioString(model.horaInicio, model.horaFin)), new pais_vo_1.Pais(model.pais), new descripcion_vo_1.Descripcion(model.descripcion), new programacion_entity_1.Programacion(model.numProgramas), new cobertura_entity_1.Cobertura(model.numCiudades), new estado_emisora_vo_1.EstadoEmisora(model.estado), model.createdAt, model.updatedAt, model.patrocinador ? new patrocinador_vo_1.Patrocinador(model.patrocinador) : null);
    }
    toOrm(emisora) {
        const [horaInicio, horaFin] = this.splitHorario(emisora.horario.value);
        return {
            id: emisora.id.value,
            nombre: emisora.nombre.value,
            canal: emisora.canal.value,
            bandaFm: emisora.banda.bandaFm ?? null,
            bandaAm: emisora.banda.bandaAm ?? null,
            numLocutores: emisora.numLocutores.value,
            genero: emisora.genero.value,
            horaInicio,
            horaFin,
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
    toHorarioString(inicio, fin) {
        const normalize = (time) => time?.toString().slice(0, 5);
        return `${normalize(inicio)} - ${normalize(fin)}`;
    }
    splitHorario(horario) {
        const [inicio, fin] = horario.split('-').map((p) => p.trim());
        return [inicio, fin];
    }
};
exports.EmisoraTypeOrmRepository = EmisoraTypeOrmRepository;
exports.EmisoraTypeOrmRepository = EmisoraTypeOrmRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(emisora_orm_entity_1.EmisoraOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EmisoraTypeOrmRepository);
//# sourceMappingURL=emisora-typeorm.repository.js.map