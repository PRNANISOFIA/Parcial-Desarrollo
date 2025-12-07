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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../../../domain/users/exceptions");
const email_vo_1 = require("../../../domain/users/value-objects/email.vo");
const user_mapper_1 = require("../mapper/user.mapper");
const user_ports_1 = require("../ports/out/user.ports");
let LoginService = class LoginService {
    userRepository;
    passwordHasher;
    tokenIssuer;
    constructor(userRepository, passwordHasher, tokenIssuer) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.tokenIssuer = tokenIssuer;
    }
    async execute(command) {
        const email = new email_vo_1.Email(command.email);
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new exceptions_1.UserNotFoundException('Credenciales invalidas');
        }
        if (!user.isActive) {
            throw new exceptions_1.UserNotFoundException('Usuario inactivo');
        }
        const isValid = await this.passwordHasher.verify(command.password, user.passwordHash.value);
        if (!isValid) {
            throw new exceptions_1.InvalidPasswordException('Credenciales invalidas');
        }
        const token = this.tokenIssuer.generateToken(user.id, user.userName, user.role);
        const expiresInSeconds = this.tokenIssuer.expiresInSeconds();
        return {
            token,
            expiresAt: new Date(Date.now() + expiresInSeconds * 1000),
            user: user_mapper_1.UserMapper.toResponse(user),
        };
    }
};
exports.LoginService = LoginService;
exports.LoginService = LoginService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_ports_1.UserRepository,
        user_ports_1.PasswordHasherPort,
        user_ports_1.TokenIssuerPort])
], LoginService);
//# sourceMappingURL=login.service.js.map