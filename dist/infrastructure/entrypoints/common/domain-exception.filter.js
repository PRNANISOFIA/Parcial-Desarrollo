"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const exceptions_1 = require("../../../domain/users/exceptions");
const exceptions_2 = require("../../../domain/emisoras/exceptions");
let DomainExceptionFilter = class DomainExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const map = new Map([
            [exceptions_1.UserNotFoundException, { status: common_1.HttpStatus.NOT_FOUND, message: exception.message }],
            [exceptions_1.EmailAlreadyExistsException, { status: common_1.HttpStatus.CONFLICT, message: exception.message }],
            [exceptions_1.InvalidPasswordException, { status: common_1.HttpStatus.BAD_REQUEST, message: exception.message }],
            [exceptions_1.InvalidRoleException, { status: common_1.HttpStatus.BAD_REQUEST, message: exception.message }],
            [exceptions_1.InvalidUserNameException, { status: common_1.HttpStatus.BAD_REQUEST, message: exception.message }],
            [exceptions_1.UserAlreadyActiveException, { status: common_1.HttpStatus.BAD_REQUEST, message: exception.message }],
            [exceptions_1.UserAlreadyInactiveException, { status: common_1.HttpStatus.BAD_REQUEST, message: exception.message }],
            [exceptions_2.EmisoraNotFoundException, { status: common_1.HttpStatus.NOT_FOUND, message: exception.message }],
            [exceptions_2.NombreEmisoraDuplicadoException, { status: common_1.HttpStatus.CONFLICT, message: exception.message }],
            [exceptions_2.ReglaConsistenciaException, { status: common_1.HttpStatus.BAD_REQUEST, message: exception.message }],
        ]);
        const match = map.get(exception.constructor);
        if (match) {
            return response.status(match.status).json({ message: match.message });
        }
        if (exception instanceof common_1.HttpException) {
            const status = exception.getStatus();
            const payload = exception.getResponse();
            let message = exception.message;
            if (typeof payload === 'string') {
                message = payload;
            }
            else if (payload && typeof payload === 'object' && 'message' in payload) {
                message = payload.message;
            }
            return response.status(status).json({ message });
        }
        return response
            .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
            .json({ message: 'Error interno', details: exception.message });
    }
};
exports.DomainExceptionFilter = DomainExceptionFilter;
exports.DomainExceptionFilter = DomainExceptionFilter = __decorate([
    (0, common_1.Catch)(Error)
], DomainExceptionFilter);
//# sourceMappingURL=domain-exception.filter.js.map