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
exports.UserTypeOrmRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const email_vo_1 = require("../../../../domain/users/value-objects/email.vo");
const password_hash_vo_1 = require("../../../../domain/users/value-objects/password-hash.vo");
const role_vo_1 = require("../../../../domain/users/value-objects/role.vo");
const user_id_vo_1 = require("../../../../domain/users/value-objects/user-id.vo");
const user_name_vo_1 = require("../../../../domain/users/value-objects/user-name.vo");
const user_entity_1 = require("../../../../domain/users/user.entity");
const user_orm_entity_1 = require("../entities/user.orm-entity");
let UserTypeOrmRepository = class UserTypeOrmRepository {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findById(id) {
        const model = await this.repo.findOne({ where: { id: id.value } });
        return model ? this.toDomain(model) : null;
    }
    async findByEmail(email) {
        const model = await this.repo.findOne({ where: { email: email.value } });
        return model ? this.toDomain(model) : null;
    }
    async findByUserName(userName) {
        const model = await this.repo.findOne({ where: { userName: userName.value } });
        return model ? this.toDomain(model) : null;
    }
    async findAll() {
        const models = await this.repo.find();
        return models.map((m) => this.toDomain(m));
    }
    async save(user) {
        const model = this.toOrm(user);
        await this.repo.save(model);
    }
    async delete(id) {
        await this.repo.delete({ id: id.value });
    }
    toDomain(model) {
        return user_entity_1.User.restore(user_id_vo_1.UserId.from(model.id), new user_name_vo_1.UserName(model.userName), new email_vo_1.Email(model.email), new password_hash_vo_1.PasswordHash(model.passwordHash), new role_vo_1.Role(model.role), model.isActive, model.createdAt, model.updatedAt);
    }
    toOrm(user) {
        return {
            id: user.id.value,
            userName: user.userName.value,
            email: user.email.value,
            passwordHash: user.passwordHash.value,
            role: user.role.value,
            isActive: user.isActive,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt ?? null,
        };
    }
};
exports.UserTypeOrmRepository = UserTypeOrmRepository;
exports.UserTypeOrmRepository = UserTypeOrmRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_orm_entity_1.UserOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserTypeOrmRepository);
//# sourceMappingURL=user-typeorm.repository.js.map