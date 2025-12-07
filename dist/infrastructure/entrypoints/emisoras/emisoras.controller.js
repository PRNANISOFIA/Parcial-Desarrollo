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
exports.EmisorasController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const emisora_use_cases_1 = require("../../../application/emisoras/ports/in/emisora.use-cases");
const create_emisora_request_1 = require("./dto/create-emisora.request");
const update_emisora_request_1 = require("./dto/update-emisora.request");
const change_banda_request_1 = require("./dto/change-banda.request");
const change_programas_request_1 = require("./dto/change-programas.request");
const change_cobertura_request_1 = require("./dto/change-cobertura.request");
const change_horario_request_1 = require("./dto/change-horario.request");
const change_locutores_request_1 = require("./dto/change-locutores.request");
const change_descripcion_request_1 = require("./dto/change-descripcion.request");
const change_patrocinador_request_1 = require("./dto/change-patrocinador.request");
const change_pais_request_1 = require("./dto/change-pais.request");
const change_canal_request_1 = require("./dto/change-canal.request");
const change_estado_request_1 = require("./dto/change-estado.request");
const change_genero_request_1 = require("./dto/change-genero.request");
const delete_emisora_command_1 = require("../../../application/emisoras/dto/command/delete-emisora.command");
const get_emisora_by_id_query_1 = require("../../../application/emisoras/dto/query/get-emisora-by-id.query");
const list_emisoras_query_1 = require("../../../application/emisoras/dto/query/list-emisoras.query");
const domain_exception_filter_1 = require("../common/domain-exception.filter");
let EmisorasController = class EmisorasController {
    createUseCase;
    updateUseCase;
    changeBandaUseCase;
    changeProgramasUseCase;
    changeCoberturaUseCase;
    changeHorarioUseCase;
    changeLocutoresUseCase;
    changeDescripcionUseCase;
    changePatrocinadorUseCase;
    changePaisUseCase;
    changeCanalUseCase;
    changeEstadoUseCase;
    changeGeneroUseCase;
    deleteUseCase;
    getByIdUseCase;
    listUseCase;
    constructor(createUseCase, updateUseCase, changeBandaUseCase, changeProgramasUseCase, changeCoberturaUseCase, changeHorarioUseCase, changeLocutoresUseCase, changeDescripcionUseCase, changePatrocinadorUseCase, changePaisUseCase, changeCanalUseCase, changeEstadoUseCase, changeGeneroUseCase, deleteUseCase, getByIdUseCase, listUseCase) {
        this.createUseCase = createUseCase;
        this.updateUseCase = updateUseCase;
        this.changeBandaUseCase = changeBandaUseCase;
        this.changeProgramasUseCase = changeProgramasUseCase;
        this.changeCoberturaUseCase = changeCoberturaUseCase;
        this.changeHorarioUseCase = changeHorarioUseCase;
        this.changeLocutoresUseCase = changeLocutoresUseCase;
        this.changeDescripcionUseCase = changeDescripcionUseCase;
        this.changePatrocinadorUseCase = changePatrocinadorUseCase;
        this.changePaisUseCase = changePaisUseCase;
        this.changeCanalUseCase = changeCanalUseCase;
        this.changeEstadoUseCase = changeEstadoUseCase;
        this.changeGeneroUseCase = changeGeneroUseCase;
        this.deleteUseCase = deleteUseCase;
        this.getByIdUseCase = getByIdUseCase;
        this.listUseCase = listUseCase;
    }
    create(request) {
        const command = request;
        return this.createUseCase.execute(command);
    }
    getById(id) {
        const query = new get_emisora_by_id_query_1.GetEmisoraByIdQuery();
        query.id = id;
        return this.getByIdUseCase.execute(query);
    }
    list(page = 1, pageSize = 10, genero, pais, banda, estado, searchTerm) {
        const query = new list_emisoras_query_1.ListEmisorasQuery();
        query.page = Number(page) || 1;
        query.pageSize = Number(pageSize) || 10;
        query.genero = genero;
        query.pais = pais;
        query.banda = banda;
        query.estado = estado;
        query.searchTerm = searchTerm;
        return this.listUseCase.execute(query);
    }
    update(id, request) {
        const command = request;
        command.id = id;
        return this.updateUseCase.execute(command);
    }
    changeBanda(id, request) {
        const command = request;
        command.id = id;
        return this.changeBandaUseCase.execute(command);
    }
    changeProgramas(id, request) {
        const command = request;
        command.id = id;
        return this.changeProgramasUseCase.execute(command);
    }
    changeCobertura(id, request) {
        const command = request;
        command.id = id;
        return this.changeCoberturaUseCase.execute(command);
    }
    changeHorario(id, request) {
        const command = request;
        command.id = id;
        return this.changeHorarioUseCase.execute(command);
    }
    changeLocutores(id, request) {
        const command = request;
        command.id = id;
        return this.changeLocutoresUseCase.execute(command);
    }
    changeDescripcion(id, request) {
        const command = request;
        command.id = id;
        return this.changeDescripcionUseCase.execute(command);
    }
    changePatrocinador(id, request) {
        const command = request;
        command.id = id;
        return this.changePatrocinadorUseCase.execute(command);
    }
    changePais(id, request) {
        const command = request;
        command.id = id;
        return this.changePaisUseCase.execute(command);
    }
    changeCanal(id, request) {
        const command = request;
        command.id = id;
        return this.changeCanalUseCase.execute(command);
    }
    changeEstado(id, request) {
        const command = request;
        command.id = id;
        return this.changeEstadoUseCase.execute(command);
    }
    changeGenero(id, request) {
        const command = request;
        command.id = id;
        return this.changeGeneroUseCase.execute(command);
    }
    delete(id) {
        const command = new delete_emisora_command_1.DeleteEmisoraCommand();
        command.id = id;
        return this.deleteUseCase.execute(command);
    }
};
exports.EmisorasController = EmisorasController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_emisora_request_1.CreateEmisoraRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', required: false, type: Number }),
    (0, swagger_1.ApiQuery)({ name: 'genero', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'pais', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'banda', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'estado', required: false, type: String }),
    (0, swagger_1.ApiQuery)({ name: 'searchTerm', required: false, type: String }),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)('genero')),
    __param(3, (0, common_1.Query)('pais')),
    __param(4, (0, common_1.Query)('banda')),
    __param(5, (0, common_1.Query)('estado')),
    __param(6, (0, common_1.Query)('searchTerm')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String, String, String, String]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "list", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_emisora_request_1.UpdateEmisoraRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/banda'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_banda_request_1.ChangeBandaRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeBanda", null);
__decorate([
    (0, common_1.Patch)(':id/programas'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_programas_request_1.ChangeProgramasRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeProgramas", null);
__decorate([
    (0, common_1.Patch)(':id/cobertura'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_cobertura_request_1.ChangeCoberturaRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeCobertura", null);
__decorate([
    (0, common_1.Patch)(':id/horario'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_horario_request_1.ChangeHorarioRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeHorario", null);
__decorate([
    (0, common_1.Patch)(':id/locutores'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_locutores_request_1.ChangeLocutoresRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeLocutores", null);
__decorate([
    (0, common_1.Patch)(':id/descripcion'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_descripcion_request_1.ChangeDescripcionRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeDescripcion", null);
__decorate([
    (0, common_1.Patch)(':id/patrocinador'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_patrocinador_request_1.ChangePatrocinadorRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changePatrocinador", null);
__decorate([
    (0, common_1.Patch)(':id/pais'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_pais_request_1.ChangePaisRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changePais", null);
__decorate([
    (0, common_1.Patch)(':id/canal'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_canal_request_1.ChangeCanalRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeCanal", null);
__decorate([
    (0, common_1.Patch)(':id/estado'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_estado_request_1.ChangeEstadoRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeEstado", null);
__decorate([
    (0, common_1.Patch)(':id/genero'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_genero_request_1.ChangeGeneroRequest]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "changeGenero", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiParam)({ name: 'id' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmisorasController.prototype, "delete", null);
exports.EmisorasController = EmisorasController = __decorate([
    (0, common_1.Controller)('emisoras'),
    (0, common_1.UseFilters)(new domain_exception_filter_1.DomainExceptionFilter()),
    __metadata("design:paramtypes", [emisora_use_cases_1.ICreateEmisoraUseCase,
        emisora_use_cases_1.IUpdateEmisoraUseCase,
        emisora_use_cases_1.IChangeBandaUseCase,
        emisora_use_cases_1.IChangeProgramasUseCase,
        emisora_use_cases_1.IChangeCoberturaUseCase,
        emisora_use_cases_1.IChangeHorarioUseCase,
        emisora_use_cases_1.IChangeLocutoresUseCase,
        emisora_use_cases_1.IChangeDescripcionUseCase,
        emisora_use_cases_1.IChangePatrocinadorUseCase,
        emisora_use_cases_1.IChangePaisUseCase,
        emisora_use_cases_1.IChangeCanalUseCase,
        emisora_use_cases_1.IChangeEstadoUseCase,
        emisora_use_cases_1.IChangeGeneroUseCase,
        emisora_use_cases_1.IDeleteEmisoraUseCase,
        emisora_use_cases_1.IGetEmisoraByIdUseCase,
        emisora_use_cases_1.IListEmisorasUseCase])
], EmisorasController);
//# sourceMappingURL=emisoras.controller.js.map