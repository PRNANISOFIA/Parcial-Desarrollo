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
exports.UserResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserResponse {
    id;
    userName;
    email;
    role;
    isActive;
    createdAt;
    updatedAt;
}
exports.UserResponse = UserResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '6c47e5dc-4575-4a0c-8b85-0b7358a11111' }),
    __metadata("design:type", String)
], UserResponse.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'jdoe' }),
    __metadata("design:type", String)
], UserResponse.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'jdoe@example.com' }),
    __metadata("design:type", String)
], UserResponse.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'User' }),
    __metadata("design:type", String)
], UserResponse.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: true }),
    __metadata("design:type", Boolean)
], UserResponse.prototype, "isActive", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-01T12:00:00Z' }),
    __metadata("design:type", Date)
], UserResponse.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '2025-01-10T12:00:00Z', nullable: true }),
    __metadata("design:type", Object)
], UserResponse.prototype, "updatedAt", void 0);
//# sourceMappingURL=user.response.js.map