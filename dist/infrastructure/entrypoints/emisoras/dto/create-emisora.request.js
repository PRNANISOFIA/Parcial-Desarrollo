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
exports.CreateEmisoraRequest = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateEmisoraRequest {
    nombre;
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
}
exports.CreateEmisoraRequest = CreateEmisoraRequest;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Radio Centro' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateEmisoraRequest.prototype, "nombre", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 95 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateEmisoraRequest.prototype, "canal", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 99.1, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateEmisoraRequest.prototype, "bandaFm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 760, required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateEmisoraRequest.prototype, "bandaAm", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 5 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateEmisoraRequest.prototype, "numLocutores", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Noticias' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(30),
    __metadata("design:type", String)
], CreateEmisoraRequest.prototype, "genero", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '06:00 - 22:00' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEmisoraRequest.prototype, "horario", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Empresa XYZ', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateEmisoraRequest.prototype, "patrocinador", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Colombia' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], CreateEmisoraRequest.prototype, "pais", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Emisora con programación variada y alcance nacional' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(20),
    (0, class_validator_1.MaxLength)(300),
    __metadata("design:type", String)
], CreateEmisoraRequest.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 8 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateEmisoraRequest.prototype, "numProgramas", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 3 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], CreateEmisoraRequest.prototype, "numCiudades", void 0);
//# sourceMappingURL=create-emisora.request.js.map