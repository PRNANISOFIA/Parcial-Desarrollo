"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmisorasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const services_1 = require("../application/emisoras/services");
const emisora_use_cases_1 = require("../application/emisoras/ports/in/emisora.use-cases");
const emisora_repository_1 = require("../domain/emisoras/emisora.repository");
const emisoras_controller_1 = require("../infrastructure/entrypoints/emisoras/emisoras.controller");
const emisora_orm_entity_1 = require("../infrastructure/persistence/typeorm/entities/emisora.orm-entity");
const emisora_typeorm_repository_1 = require("../infrastructure/persistence/typeorm/repositories/emisora-typeorm.repository");
let EmisorasModule = class EmisorasModule {
};
exports.EmisorasModule = EmisorasModule;
exports.EmisorasModule = EmisorasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([emisora_orm_entity_1.EmisoraOrmEntity])],
        controllers: [emisoras_controller_1.EmisorasController],
        providers: [
            { provide: emisora_repository_1.EmisoraRepository, useClass: emisora_typeorm_repository_1.EmisoraTypeOrmRepository },
            { provide: emisora_use_cases_1.ICreateEmisoraUseCase, useClass: services_1.CreateEmisoraService },
            { provide: emisora_use_cases_1.IUpdateEmisoraUseCase, useClass: services_1.UpdateEmisoraService },
            { provide: emisora_use_cases_1.IChangeBandaUseCase, useClass: services_1.ChangeBandaService },
            { provide: emisora_use_cases_1.IChangeProgramasUseCase, useClass: services_1.ChangeProgramasService },
            { provide: emisora_use_cases_1.IChangeCoberturaUseCase, useClass: services_1.ChangeCoberturaService },
            { provide: emisora_use_cases_1.IChangeHorarioUseCase, useClass: services_1.ChangeHorarioService },
            { provide: emisora_use_cases_1.IChangeLocutoresUseCase, useClass: services_1.ChangeLocutoresService },
            { provide: emisora_use_cases_1.IChangeDescripcionUseCase, useClass: services_1.ChangeDescripcionService },
            { provide: emisora_use_cases_1.IChangePatrocinadorUseCase, useClass: services_1.ChangePatrocinadorService },
            { provide: emisora_use_cases_1.IChangePaisUseCase, useClass: services_1.ChangePaisService },
            { provide: emisora_use_cases_1.IChangeCanalUseCase, useClass: services_1.ChangeCanalService },
            { provide: emisora_use_cases_1.IChangeEstadoUseCase, useClass: services_1.ChangeEstadoService },
            { provide: emisora_use_cases_1.IChangeGeneroUseCase, useClass: services_1.ChangeGeneroService },
            { provide: emisora_use_cases_1.IDeleteEmisoraUseCase, useClass: services_1.DeleteEmisoraService },
            { provide: emisora_use_cases_1.IGetEmisoraByIdUseCase, useClass: services_1.GetEmisoraByIdService },
            { provide: emisora_use_cases_1.IListEmisorasUseCase, useClass: services_1.ListEmisorasService },
        ],
        exports: [emisora_repository_1.EmisoraRepository],
    })
], EmisorasModule);
//# sourceMappingURL=emisoras.module.js.map