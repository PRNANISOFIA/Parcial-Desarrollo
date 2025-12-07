"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyInactiveException = exports.UserAlreadyActiveException = exports.InvalidUserNameException = exports.InvalidRoleException = exports.InvalidPasswordException = exports.EmailAlreadyExistsException = exports.UserNotFoundException = void 0;
class UserNotFoundException extends Error {
    constructor(message = 'Usuario no encontrado') {
        super(message);
    }
}
exports.UserNotFoundException = UserNotFoundException;
class EmailAlreadyExistsException extends Error {
    constructor(email) {
        super(`El email ${email} ya existe`);
    }
}
exports.EmailAlreadyExistsException = EmailAlreadyExistsException;
class InvalidPasswordException extends Error {
}
exports.InvalidPasswordException = InvalidPasswordException;
class InvalidRoleException extends Error {
}
exports.InvalidRoleException = InvalidRoleException;
class InvalidUserNameException extends Error {
}
exports.InvalidUserNameException = InvalidUserNameException;
class UserAlreadyActiveException extends Error {
    constructor() {
        super('El usuario ya está activo');
    }
}
exports.UserAlreadyActiveException = UserAlreadyActiveException;
class UserAlreadyInactiveException extends Error {
    constructor() {
        super('El usuario ya está inactivo');
    }
}
exports.UserAlreadyInactiveException = UserAlreadyInactiveException;
//# sourceMappingURL=exceptions.js.map