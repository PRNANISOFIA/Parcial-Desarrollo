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
var RequestPasswordResetService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestPasswordResetService = void 0;
const common_1 = require("@nestjs/common");
const email_vo_1 = require("../../../domain/users/value-objects/email.vo");
const user_ports_1 = require("../ports/out/user.ports");
let RequestPasswordResetService = RequestPasswordResetService_1 = class RequestPasswordResetService {
    userRepository;
    logger = new common_1.Logger(RequestPasswordResetService_1.name);
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(command) {
        const email = new email_vo_1.Email(command.email);
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            return;
        }
        this.logger.log(`Solicitud de reset de contraseña para ${email.value}`);
    }
};
exports.RequestPasswordResetService = RequestPasswordResetService;
exports.RequestPasswordResetService = RequestPasswordResetService = RequestPasswordResetService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_ports_1.UserRepository])
], RequestPasswordResetService);
//# sourceMappingURL=request-password-reset.service.js.map