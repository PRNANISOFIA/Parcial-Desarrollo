"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const services_1 = require("../application/users/services");
const user_use_cases_1 = require("../application/users/ports/in/user.use-cases");
const user_ports_1 = require("../application/users/ports/out/user.ports");
const users_controller_1 = require("../infrastructure/entrypoints/users/users.controller");
const jwt_token_issuer_adapter_1 = require("../infrastructure/security/jwt-token-issuer.adapter");
const bcrypt_password_hasher_adapter_1 = require("../infrastructure/security/bcrypt-password-hasher.adapter");
const password_strength_policy_adapter_1 = require("../infrastructure/security/password-strength-policy.adapter");
const user_typeorm_repository_1 = require("../infrastructure/persistence/typeorm/repositories/user-typeorm.repository");
const user_orm_entity_1 = require("../infrastructure/persistence/typeorm/entities/user.orm-entity");
const typeorm_unit_of_work_1 = require("../infrastructure/persistence/typeorm/unit-of-work/typeorm-unit-of-work");
const config_1 = require("@nestjs/config");
const token_blacklist_orm_entity_1 = require("../infrastructure/persistence/typeorm/entities/token-blacklist.orm-entity");
const jwt_auth_guard_1 = require("../infrastructure/security/jwt-auth.guard");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule,
            typeorm_1.TypeOrmModule.forFeature([user_orm_entity_1.UserOrmEntity, token_blacklist_orm_entity_1.TokenBlacklistOrmEntity]),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    const expirationHours = Number(config.get('JWT_EXPIRATION_HOURS', 24));
                    return {
                        secret: config.get('JWT_SECRET', 'MiClaveSecretaSuperSeguraParaJWT2024!@#'),
                        signOptions: {
                            expiresIn: `${expirationHours}h`,
                            issuer: config.get('JWT_ISSUER', 'ArquitecturaHexagonalDDD'),
                            audience: config.get('JWT_AUDIENCE', 'ArquitecturaHexagonalDDD-Users'),
                        },
                    };
                },
            }),
        ],
        controllers: [users_controller_1.UsersController],
        providers: [
            { provide: user_ports_1.UserRepository, useClass: user_typeorm_repository_1.UserTypeOrmRepository },
            { provide: user_ports_1.PasswordHasherPort, useClass: bcrypt_password_hasher_adapter_1.BcryptPasswordHasherAdapter },
            { provide: user_ports_1.PasswordStrengthPolicyPort, useClass: password_strength_policy_adapter_1.PasswordStrengthPolicyAdapter },
            { provide: user_ports_1.TokenIssuerPort, useClass: jwt_token_issuer_adapter_1.JwtTokenIssuerAdapter },
            { provide: user_ports_1.UnitOfWorkPort, useClass: typeorm_unit_of_work_1.TypeOrmUnitOfWork },
            jwt_auth_guard_1.JwtAuthGuard,
            { provide: user_use_cases_1.ICreateUserUseCase, useClass: services_1.CreateUserService },
            { provide: user_use_cases_1.IUpdateUserUseCase, useClass: services_1.UpdateUserService },
            { provide: user_use_cases_1.IDeleteUserUseCase, useClass: services_1.DeleteUserService },
            { provide: user_use_cases_1.IGetUserByIdUseCase, useClass: services_1.GetUserByIdService },
            { provide: user_use_cases_1.IListUsersUseCase, useClass: services_1.ListUsersService },
            { provide: user_use_cases_1.ILoginUseCase, useClass: services_1.LoginService },
            { provide: user_use_cases_1.ILogoutUseCase, useClass: services_1.LogoutService },
            { provide: user_use_cases_1.IChangePasswordUseCase, useClass: services_1.ChangePasswordService },
            { provide: user_use_cases_1.IRequestPasswordResetUseCase, useClass: services_1.RequestPasswordResetService },
            { provide: user_use_cases_1.IResetPasswordUseCase, useClass: services_1.ResetPasswordService },
        ],
        exports: [user_ports_1.UserRepository, user_ports_1.TokenIssuerPort, jwt_auth_guard_1.JwtAuthGuard],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map