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
exports.EmisoraOrmEntity = void 0;
const typeorm_1 = require("typeorm");
let EmisoraOrmEntity = class EmisoraOrmEntity {
    id;
    nombre;
    canal;
    bandaFm;
    bandaAm;
    numLocutores;
    genero;
    horaInicio;
    horaFin;
    patrocinador;
    pais;
    descripcion;
    numProgramas;
    numCiudades;
    estado;
    createdAt;
    updatedAt;
};
exports.EmisoraOrmEntity = EmisoraOrmEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EmisoraOrmEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 120 }),
    __metadata("design:type", String)
], EmisoraOrmEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], EmisoraOrmEntity.prototype, "canal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'banda_fm', type: 'double precision', nullable: true }),
    __metadata("design:type", Object)
], EmisoraOrmEntity.prototype, "bandaFm", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'banda_am', type: 'int', nullable: true }),
    __metadata("design:type", Object)
], EmisoraOrmEntity.prototype, "bandaAm", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'num_locutores', type: 'int' }),
    __metadata("design:type", Number)
], EmisoraOrmEntity.prototype, "numLocutores", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50 }),
    __metadata("design:type", String)
], EmisoraOrmEntity.prototype, "genero", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hora_inicio', type: 'time' }),
    __metadata("design:type", String)
], EmisoraOrmEntity.prototype, "horaInicio", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'hora_fin', type: 'time' }),
    __metadata("design:type", String)
], EmisoraOrmEntity.prototype, "horaFin", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120, nullable: true }),
    __metadata("design:type", Object)
], EmisoraOrmEntity.prototype, "patrocinador", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 80 }),
    __metadata("design:type", String)
], EmisoraOrmEntity.prototype, "pais", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 300 }),
    __metadata("design:type", String)
], EmisoraOrmEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'num_programas', type: 'int' }),
    __metadata("design:type", Number)
], EmisoraOrmEntity.prototype, "numProgramas", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'num_ciudades', type: 'int' }),
    __metadata("design:type", Number)
], EmisoraOrmEntity.prototype, "numCiudades", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 15 }),
    __metadata("design:type", String)
], EmisoraOrmEntity.prototype, "estado", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'created_at', type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], EmisoraOrmEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'updated_at', type: 'timestamp with time zone', nullable: true }),
    __metadata("design:type", Object)
], EmisoraOrmEntity.prototype, "updatedAt", void 0);
exports.EmisoraOrmEntity = EmisoraOrmEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'emisoras' }),
    (0, typeorm_1.Unique)('uq_emisora_nombre', ['nombre'])
], EmisoraOrmEntity);
//# sourceMappingURL=emisora.orm-entity.js.map