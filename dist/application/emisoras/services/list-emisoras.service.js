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
exports.ListEmisorasService = void 0;
const common_1 = require("@nestjs/common");
const emisora_repository_1 = require("../../../domain/emisoras/emisora.repository");
const emisora_mapper_1 = require("../mapper/emisora.mapper");
let ListEmisorasService = class ListEmisorasService {
    emisoraRepository;
    constructor(emisoraRepository) {
        this.emisoraRepository = emisoraRepository;
    }
    async execute(query) {
        let emisoras = await this.emisoraRepository.findAll();
        if (query.genero) {
            emisoras = emisoras.filter((e) => e.genero.value.toLowerCase() === query.genero.toLowerCase());
        }
        if (query.pais) {
            emisoras = emisoras.filter((e) => e.pais.value.toLowerCase() === query.pais.toLowerCase());
        }
        if (query.banda) {
            const banda = query.banda.toLowerCase();
            emisoras = emisoras.filter((e) => banda === 'fm' ? e.banda.isFm() : banda === 'am' ? e.banda.isAm() : true);
        }
        if (query.estado) {
            emisoras = emisoras.filter((e) => e.estado.value === query.estado.toUpperCase());
        }
        if (query.searchTerm) {
            const term = query.searchTerm.toLowerCase();
            emisoras = emisoras.filter((e) => e.nombre.value.toLowerCase().includes(term) ||
                e.descripcion.value.toLowerCase().includes(term) ||
                e.genero.value.toLowerCase().includes(term));
        }
        const total = emisoras.length;
        const start = (query.page - 1) * query.pageSize;
        const paged = emisoras.slice(start, start + query.pageSize);
        return emisora_mapper_1.EmisoraMapper.toList(paged, total, query.page, query.pageSize);
    }
};
exports.ListEmisorasService = ListEmisorasService;
exports.ListEmisorasService = ListEmisorasService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [emisora_repository_1.EmisoraRepository])
], ListEmisorasService);
//# sourceMappingURL=list-emisoras.service.js.map