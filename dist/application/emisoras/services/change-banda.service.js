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
exports.ChangeBandaService = void 0;
const common_1 = require("@nestjs/common");
const emisora_repository_1 = require("../../../domain/emisoras/emisora.repository");
const emisora_mapper_1 = require("../mapper/emisora.mapper");
const emisora_id_vo_1 = require("../../../domain/emisoras/value-objects/emisora-id.vo");
const exceptions_1 = require("../../../domain/emisoras/exceptions");
const banda_vo_1 = require("../../../domain/emisoras/value-objects/banda.vo");
const canal_vo_1 = require("../../../domain/emisoras/value-objects/canal.vo");
let ChangeBandaService = class ChangeBandaService {
    emisoraRepository;
    constructor(emisoraRepository) {
        this.emisoraRepository = emisoraRepository;
    }
    async execute(command) {
        const emisora = await this.emisoraRepository.findById(emisora_id_vo_1.EmisoraId.from(command.id));
        if (!emisora) {
            throw new exceptions_1.EmisoraNotFoundException();
        }
        emisora.cambiarBanda(new banda_vo_1.Banda(command.bandaFm ?? null, command.bandaAm ?? null), new canal_vo_1.Canal(command.canal));
        await this.emisoraRepository.save(emisora);
        return emisora_mapper_1.EmisoraMapper.toResponse(emisora);
    }
};
exports.ChangeBandaService = ChangeBandaService;
exports.ChangeBandaService = ChangeBandaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [emisora_repository_1.EmisoraRepository])
], ChangeBandaService);
//# sourceMappingURL=change-banda.service.js.map