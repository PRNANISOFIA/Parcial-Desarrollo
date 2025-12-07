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
exports.ListUsersService = void 0;
const common_1 = require("@nestjs/common");
const user_mapper_1 = require("../mapper/user.mapper");
const user_ports_1 = require("../ports/out/user.ports");
let ListUsersService = class ListUsersService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(query) {
        const users = await this.userRepository.findAll();
        let filtered = users;
        if (query.isActive !== undefined) {
            filtered = filtered.filter((u) => u.isActive === query.isActive);
        }
        if (query.role) {
            filtered = filtered.filter((u) => u.role.value.toLowerCase() === query.role.toLowerCase());
        }
        if (query.searchTerm) {
            const term = query.searchTerm.toLowerCase();
            filtered = filtered.filter((u) => u.userName.value.toLowerCase().includes(term) ||
                u.email.value.toLowerCase().includes(term));
        }
        const total = filtered.length;
        const start = (query.page - 1) * query.pageSize;
        const paged = filtered.slice(start, start + query.pageSize);
        return user_mapper_1.UserMapper.toList(paged, total, query.page, query.pageSize);
    }
};
exports.ListUsersService = ListUsersService;
exports.ListUsersService = ListUsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_ports_1.UserRepository])
], ListUsersService);
//# sourceMappingURL=list-users.service.js.map