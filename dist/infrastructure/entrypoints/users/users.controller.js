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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_use_cases_1 = require("../../../application/users/ports/in/user.use-cases");
const change_password_request_1 = require("./dto/change-password.request");
const create_user_request_1 = require("./dto/create-user.request");
const login_request_1 = require("./dto/login.request");
const request_password_reset_request_1 = require("./dto/request-password-reset.request");
const reset_password_request_1 = require("./dto/reset-password.request");
const update_user_request_1 = require("./dto/update-user.request");
const domain_exception_filter_1 = require("../common/domain-exception.filter");
const list_users_query_1 = require("../../../application/users/dto/query/list-users.query");
const get_user_by_id_query_1 = require("../../../application/users/dto/query/get-user-by-id.query");
const delete_user_command_1 = require("../../../application/users/dto/command/delete-user.command");
const user_response_1 = require("../../../application/users/dto/response/user.response");
const user_list_response_1 = require("../../../application/users/dto/response/user-list.response");
const login_response_1 = require("../../../application/users/dto/response/login.response");
const jwt_auth_guard_1 = require("../../security/jwt-auth.guard");
let UsersController = class UsersController {
    createUserUseCase;
    updateUserUseCase;
    deleteUserUseCase;
    getUserByIdUseCase;
    listUsersUseCase;
    loginUseCase;
    logoutUseCase;
    changePasswordUseCase;
    requestPasswordResetUseCase;
    resetPasswordUseCase;
    constructor(createUserUseCase, updateUserUseCase, deleteUserUseCase, getUserByIdUseCase, listUsersUseCase, loginUseCase, logoutUseCase, changePasswordUseCase, requestPasswordResetUseCase, resetPasswordUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.updateUserUseCase = updateUserUseCase;
        this.deleteUserUseCase = deleteUserUseCase;
        this.getUserByIdUseCase = getUserByIdUseCase;
        this.listUsersUseCase = listUsersUseCase;
        this.loginUseCase = loginUseCase;
        this.logoutUseCase = logoutUseCase;
        this.changePasswordUseCase = changePasswordUseCase;
        this.requestPasswordResetUseCase = requestPasswordResetUseCase;
        this.resetPasswordUseCase = resetPasswordUseCase;
    }
    create(request) {
        const command = request;
        return this.createUserUseCase.execute(command);
    }
    getById(id) {
        const query = new get_user_by_id_query_1.GetUserByIdQuery();
        query.id = id;
        return this.getUserByIdUseCase.execute(query);
    }
    list(page = 1, pageSize = 10, searchTerm, isActive, role) {
        const query = new list_users_query_1.ListUsersQuery();
        query.page = Number(page) || 1;
        query.pageSize = Number(pageSize) || 10;
        query.searchTerm = searchTerm;
        query.role = role;
        if (isActive !== undefined) {
            query.isActive = isActive === 'true';
        }
        return this.listUsersUseCase.execute(query);
    }
    update(id, request) {
        const command = request;
        command.id = id;
        return this.updateUserUseCase.execute(command);
    }
    delete(id) {
        const command = new delete_user_command_1.DeleteUserCommand();
        command.id = id;
        return this.deleteUserUseCase.execute(command);
    }
    login(request) {
        const command = request;
        return this.loginUseCase.execute(command);
    }
    async logout(req) {
        const authorization = req.headers['authorization'];
        if (Array.isArray(authorization)) {
            throw new common_1.UnauthorizedException('Authorization header with Bearer token is required');
        }
        if (!authorization || !authorization.startsWith('Bearer ')) {
            throw new common_1.UnauthorizedException('Authorization header with Bearer token is required');
        }
        const token = authorization.replace('Bearer', '').trim();
        await this.logoutUseCase.execute(token);
        return { message: 'Sesion cerrada' };
    }
    async changePassword(id, request) {
        const command = request;
        command.id = id;
        await this.changePasswordUseCase.execute(command);
        return { message: 'Password cambiada' };
    }
    async requestPasswordReset(request) {
        const command = request;
        await this.requestPasswordResetUseCase.execute(command);
        return { message: 'Si el email existe se enviara un enlace' };
    }
    async resetPassword(request) {
        const command = request;
        await this.resetPasswordUseCase.execute(command);
        return { message: 'Password reseteada' };
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Crear usuario' }),
    (0, swagger_1.ApiCreatedResponse)({ type: user_response_1.UserResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_request_1.CreateUserRequest]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener usuario por id' }),
    (0, swagger_1.ApiOkResponse)({ type: user_response_1.UserResponse }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "getById", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Listar usuarios' }),
    (0, swagger_1.ApiOkResponse)({ type: user_list_response_1.UserListResponse }),
    (0, swagger_1.ApiQuery)({ name: 'page', required: false, example: 1 }),
    (0, swagger_1.ApiQuery)({ name: 'pageSize', required: false, example: 10 }),
    (0, swagger_1.ApiQuery)({ name: 'searchTerm', required: false, example: 'john' }),
    (0, swagger_1.ApiQuery)({ name: 'isActive', required: false, example: true }),
    (0, swagger_1.ApiQuery)({ name: 'role', required: false, example: 'Admin' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('pageSize')),
    __param(2, (0, common_1.Query)('searchTerm')),
    __param(3, (0, common_1.Query)('isActive')),
    __param(4, (0, common_1.Query)('role')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, String, String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "list", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar usuario' }),
    (0, swagger_1.ApiOkResponse)({ type: user_response_1.UserResponse }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_request_1.UpdateUserRequest]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar usuario' }),
    (0, swagger_1.ApiResponse)({ status: 204, description: 'Usuario eliminado' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Login' }),
    (0, swagger_1.ApiOkResponse)({ type: login_response_1.LoginResponse }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_1.LoginRequest]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, swagger_1.ApiOperation)({ summary: 'Logout' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Sesion cerrada' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)(':id/change-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Cambiar password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password cambiada' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, change_password_request_1.ChangePasswordRequest]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Post)('request-password-reset'),
    (0, swagger_1.ApiOperation)({ summary: 'Solicitar reset de password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Solicitud recibida' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_password_reset_request_1.RequestPasswordResetRequest]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "requestPasswordReset", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, swagger_1.ApiOperation)({ summary: 'Resetear password' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Password reseteada' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_request_1.ResetPasswordRequest]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "resetPassword", null);
exports.UsersController = UsersController = __decorate([
    (0, swagger_1.ApiTags)('users'),
    (0, common_1.Controller)('users'),
    (0, common_1.UseFilters)(new domain_exception_filter_1.DomainExceptionFilter()),
    __metadata("design:paramtypes", [user_use_cases_1.ICreateUserUseCase,
        user_use_cases_1.IUpdateUserUseCase,
        user_use_cases_1.IDeleteUserUseCase,
        user_use_cases_1.IGetUserByIdUseCase,
        user_use_cases_1.IListUsersUseCase,
        user_use_cases_1.ILoginUseCase,
        user_use_cases_1.ILogoutUseCase,
        user_use_cases_1.IChangePasswordUseCase,
        user_use_cases_1.IRequestPasswordResetUseCase,
        user_use_cases_1.IResetPasswordUseCase])
], UsersController);
//# sourceMappingURL=users.controller.js.map