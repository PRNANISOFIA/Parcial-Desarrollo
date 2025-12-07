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
exports.ResetPasswordService = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../../../domain/users/exceptions");
const email_vo_1 = require("../../../domain/users/value-objects/email.vo");
const password_hash_vo_1 = require("../../../domain/users/value-objects/password-hash.vo");
const user_ports_1 = require("../ports/out/user.ports");
let ResetPasswordService = class ResetPasswordService {
    userRepository;
    passwordHasher;
    passwordStrengthPolicy;
    constructor(userRepository, passwordHasher, passwordStrengthPolicy) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
        this.passwordStrengthPolicy = passwordStrengthPolicy;
    }
    async execute(command) {
        const email = new email_vo_1.Email(command.email);
        const user = await this.userRepository.findByEmail(email);
        if (!user)
            throw new exceptions_1.UserNotFoundException();
        if (!this.passwordStrengthPolicy.isStrong(command.newPassword)) {
            throw new exceptions_1.InvalidPasswordException(this.passwordStrengthPolicy.messageFor(command.newPassword));
        }
        const newHash = new password_hash_vo_1.PasswordHash(await this.passwordHasher.hash(command.newPassword));
        user.changePassword(newHash);
        await this.userRepository.save(user);
    }
};
exports.ResetPasswordService = ResetPasswordService;
exports.ResetPasswordService = ResetPasswordService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_ports_1.UserRepository,
        user_ports_1.PasswordHasherPort,
        user_ports_1.PasswordStrengthPolicyPort])
], ResetPasswordService);
//# sourceMappingURL=reset-password.service.js.map