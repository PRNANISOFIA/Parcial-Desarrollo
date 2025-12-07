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
exports.CreateUserService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../../../domain/users/exceptions");
const email_vo_1 = require("../../../domain/users/value-objects/email.vo");
const password_hash_vo_1 = require("../../../domain/users/value-objects/password-hash.vo");
const role_vo_1 = require("../../../domain/users/value-objects/role.vo");
const user_name_vo_1 = require("../../../domain/users/value-objects/user-name.vo");
const user_entity_1 = require("../../../domain/users/user.entity");
const user_mapper_1 = require("../mapper/user.mapper");
const user_ports_1 = require("../ports/out/user.ports");
let CreateUserService = class CreateUserService {
    userRepository;
    passwordHasher;
    passwordStrengthPolicy;
    constructor(userRepository, passwordHasher, passwordStrengthPolicy) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.passwordStrengthPolicy = passwordStrengthPolicy;
    }
    async execute(command) {
        if (!this.passwordStrengthPolicy.isStrong(command.password)) {
            throw new exceptions_1.InvalidPasswordException(this.passwordStrengthPolicy.messageFor(command.password));
        }
        const userName = new user_name_vo_1.UserName(command.userName);
        const email = new email_vo_1.Email(command.email);
        const role = new role_vo_1.Role(command.role);
        const existingEmail = await this.userRepository.findByEmail(email);
        if (existingEmail) {
            throw new exceptions_1.EmailAlreadyExistsException(email.value);
        }
        const existingUserName = await this.userRepository.findByUserName(userName);
        if (existingUserName) {
            throw new exceptions_1.InvalidUserNameException('El nombre de usuario ya está en uso');
        }
        const passwordHash = new password_hash_vo_1.PasswordHash(await this.passwordHasher.hash(command.password));
        const user = user_entity_1.User.create(userName, email, passwordHash, role);
        await this.userRepository.save(user);
        return user_mapper_1.UserMapper.toResponse(user);
    }
};
exports.CreateUserService = CreateUserService;
exports.CreateUserService = CreateUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_ports_1.UserRepository,
        user_ports_1.PasswordHasherPort,
        user_ports_1.PasswordStrengthPolicyPort])
], CreateUserService);
//# sourceMappingURL=create-user.service.js.map