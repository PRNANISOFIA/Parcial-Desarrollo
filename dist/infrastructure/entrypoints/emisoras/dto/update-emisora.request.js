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
exports.UpdateEmisoraRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class UpdateEmisoraRequest {
    canal;
    bandaFm;
    bandaAm;
    numLocutores;
    genero;
    horario;
    patrocinador;
    pais;
    descripcion;
    numProgramas;
    numCiudades;
    estado;
}
exports.UpdateEmisoraRequest = UpdateEmisoraRequest;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 95 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateEmisoraRequest.prototype, "canal", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 99.1 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateEmisoraRequest.prototype, "bandaFm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 760 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateEmisoraRequest.prototype, "bandaAm", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 6 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateEmisoraRequest.prototype, "numLocutores", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Musica' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], UpdateEmisoraRequest.prototype, "genero", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: '07:00 - 21:00' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEmisoraRequest.prototype, "horario", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Empresa XYZ' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], UpdateEmisoraRequest.prototype, "patrocinador", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Colombia' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], UpdateEmisoraRequest.prototype, "pais", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'Nueva descripción con más detalle' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], UpdateEmisoraRequest.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 10 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateEmisoraRequest.prototype, "numProgramas", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 4 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], UpdateEmisoraRequest.prototype, "numCiudades", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({ example: 'ACTIVA', enum: ['ACTIVA', 'INACTIVA'] }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateEmisoraRequest.prototype, "estado", void 0);
//# sourceMappingURL=update-emisora.request.js.map