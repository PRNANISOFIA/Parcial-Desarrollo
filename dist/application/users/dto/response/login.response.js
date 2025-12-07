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
exports.LoginResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_response_1 = require("./user.response");
class LoginResponse {
    token;
    expiresAt;
    user;
}
exports.LoginResponse = LoginResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' }),
    __metadata("design:type", String)
], LoginResponse.prototype, "token", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01T13:00:00Z' }),
    __metadata("design:type", Date)
], LoginResponse.prototype, "expiresAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: () => user_response_1.UserResponse }),
    __metadata("design:type", user_response_1.UserResponse)
], LoginResponse.prototype, "user", void 0);
//# sourceMappingURL=login.response.js.map