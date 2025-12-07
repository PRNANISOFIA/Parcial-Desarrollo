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
exports.GetEmisoraByIdService = void 0;
const common_1 = require("@nestjs/common");
const emisora_repository_1 = require("../../../domain/emisoras/emisora.repository");
const emisora_mapper_1 = require("../mapper/emisora.mapper");
const emisora_id_vo_1 = require("../../../domain/emisoras/value-objects/emisora-id.vo");
let GetEmisoraByIdService = class GetEmisoraByIdService {
    emisoraRepository;
    constructor(emisoraRepository) {
        this.emisoraRepository = emisoraRepository;
    }
    async execute(query) {
        const emisora = await this.emisoraRepository.findById(emisora_id_vo_1.EmisoraId.from(query.id));
        return emisora ? emisora_mapper_1.EmisoraMapper.toResponse(emisora) : null;
    }
};
exports.GetEmisoraByIdService = GetEmisoraByIdService;
exports.GetEmisoraByIdService = GetEmisoraByIdService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [emisora_repository_1.EmisoraRepository])
], GetEmisoraByIdService);
//# sourceMappingURL=get-emisora-by-id.service.js.map