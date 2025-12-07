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
exports.UpdateUserService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../../../domain/users/exceptions");
const email_vo_1 = require("../../../domain/users/value-objects/email.vo");
const role_vo_1 = require("../../../domain/users/value-objects/role.vo");
const user_id_vo_1 = require("../../../domain/users/value-objects/user-id.vo");
const user_name_vo_1 = require("../../../domain/users/value-objects/user-name.vo");
const user_mapper_1 = require("../mapper/user.mapper");
const user_ports_1 = require("../ports/out/user.ports");
let UpdateUserService = class UpdateUserService {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(command) {
        const id = user_id_vo_1.UserId.from(command.id);
        const user = await this.userRepository.findById(id);
        if (!user)
            throw new exceptions_1.UserNotFoundException();
        const newUserName = new user_name_vo_1.UserName(command.userName);
        const newEmail = new email_vo_1.Email(command.email);
        const newRole = new role_vo_1.Role(command.role);
        const duplicateUserName = await this.userRepository.findByUserName(newUserName);
        if (duplicateUserName && duplicateUserName.id.value !== user.id.value) {
            throw new exceptions_1.InvalidUserNameException('El nombre de usuario ya está en uso');
        }
        user.rename(newUserName);
        user.updateEmail(newEmail);
        user.assignRole(newRole);
        await this.userRepository.save(user);
        return user_mapper_1.UserMapper.toResponse(user);
    }
};
exports.UpdateUserService = UpdateUserService;
exports.UpdateUserService = UpdateUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_ports_1.UserRepository])
], UpdateUserService);
//# sourceMappingURL=update-user.service.js.map