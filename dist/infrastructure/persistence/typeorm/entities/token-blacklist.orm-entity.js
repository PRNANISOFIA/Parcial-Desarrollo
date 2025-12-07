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
exports.TokenBlacklistOrmEntity = void 0;
const typeorm_1 = require("typeorm");
let TokenBlacklistOrmEntity = class TokenBlacklistOrmEntity {
    token;
    expirationTime;
    createdAt;
};
exports.TokenBlacklistOrmEntity = TokenBlacklistOrmEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'token', type: 'varchar', length: 500 }),
    __metadata("design:type", String)
], TokenBlacklistOrmEntity.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'expiration_time', type: 'timestamp with time zone' }),
    __metadata("design:type", Date)
], TokenBlacklistOrmEntity.prototype, "expirationTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'created_at',
        type: 'timestamp with time zone',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TokenBlacklistOrmEntity.prototype, "createdAt", void 0);
exports.TokenBlacklistOrmEntity = TokenBlacklistOrmEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'token_blacklist' })
], TokenBlacklistOrmEntity);
//# sourceMappingURL=token-blacklist.orm-entity.js.map