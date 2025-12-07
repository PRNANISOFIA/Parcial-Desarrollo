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
exports.UserListResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_response_1 = require("./user.response");
class UserListResponse {
    users;
    totalCount;
    page;
    pageSize;
}
exports.UserListResponse = UserListResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: [user_response_1.UserResponse] }),
    __metadata("design:type", Array)
], UserListResponse.prototype, "users", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UserListResponse.prototype, "totalCount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1 }),
    __metadata("design:type", Number)
], UserListResponse.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10 }),
    __metadata("design:type", Number)
], UserListResponse.prototype, "pageSize", void 0);
//# sourceMappingURL=user-list.response.js.map