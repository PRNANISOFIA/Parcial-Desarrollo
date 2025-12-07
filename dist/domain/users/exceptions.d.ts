export declare class UserNotFoundException extends Error {
    constructor(message?: string);
}
export declare class EmailAlreadyExistsException extends Error {
    constructor(email: string);
}
export declare class InvalidPasswordException extends Error {
}
export declare class InvalidRoleException extends Error {
}
export declare class InvalidUserNameException extends Error {
}
export declare class UserAlreadyActiveException extends Error {
    constructor();
}
export declare class UserAlreadyInactiveException extends Error {
    constructor();
}
