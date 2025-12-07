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
exports.JwtTokenIssuerAdapter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const token_blacklist_orm_entity_1 = require("../persistence/typeorm/entities/token-blacklist.orm-entity");
let JwtTokenIssuerAdapter = class JwtTokenIssuerAdapter {
    jwtService;
    tokenBlacklistRepo;
    expirationSeconds;
    constructor(jwtService, tokenBlacklistRepo) {
        this.jwtService = jwtService;
        this.tokenBlacklistRepo = tokenBlacklistRepo;
        const hours = Number(process.env.JWT_EXPIRATION_HOURS ?? 24);
        this.expirationSeconds = hours * 60 * 60;
    }
    generateToken(userId, userName, role) {
        return this.jwtService.sign({
            sub: userId.value,
            userName: userName.value,
            role: role.value,
        });
    }
    expiresInSeconds() {
        return this.expirationSeconds;
    }
    async validate(token) {
        const blacklisted = await this.tokenBlacklistRepo.findOne({ where: { token } });
        if (blacklisted && blacklisted.expirationTime > new Date()) {
            return false;
        }
        try {
            this.jwtService.verify(token);
            return true;
        }
        catch {
            return false;
        }
    }
    async revoke(token) {
        let expirationTime = new Date(Date.now() + this.expirationSeconds * 1000);
        const decoded = this.jwtService.decode(token);
        if (decoded?.exp) {
            expirationTime = new Date(decoded.exp * 1000);
        }
        await this.tokenBlacklistRepo.save({ token, expirationTime });
    }
};
exports.JwtTokenIssuerAdapter = JwtTokenIssuerAdapter;
exports.JwtTokenIssuerAdapter = JwtTokenIssuerAdapter = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(token_blacklist_orm_entity_1.TokenBlacklistOrmEntity)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        typeorm_2.Repository])
], JwtTokenIssuerAdapter);
//# sourceMappingURL=jwt-token-issuer.adapter.js.map