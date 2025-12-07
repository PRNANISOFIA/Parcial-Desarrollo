export class UserNotFoundException extends Error {
  constructor(message = 'Usuario no encontrado') {
    super(message);
  }
}

export class EmailAlreadyExistsException extends Error {
  constructor(email: string) {
    super(`El email ${email} ya existe`);
  }
}

export class InvalidPasswordException extends Error {}

export class InvalidRoleException extends Error {}

export class InvalidUserNameException extends Error {}

export class UserAlreadyActiveException extends Error {
  constructor() {
    super('El usuario ya está activo');
  }
}

export class UserAlreadyInactiveException extends Error {
  constructor() {
    super('El usuario ya está inactivo');
  }
}

