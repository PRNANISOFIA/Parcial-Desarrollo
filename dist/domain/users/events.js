"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoleAssignedEvent = exports.UserPasswordChangedEvent = exports.UserRegisteredEvent = void 0;
class UserRegisteredEvent {
    userId;
    userName;
    email;
    role;
    occurredOn = new Date();
    constructor(userId, userName, email, role) {
        this.userId = userId;
        this.userName = userName;
        this.email = email;
        this.role = role;
    }
}
exports.UserRegisteredEvent = UserRegisteredEvent;
class UserPasswordChangedEvent {
    userId;
    occurredOn = new Date();
    constructor(userId) {
        this.userId = userId;
    }
}
exports.UserPasswordChangedEvent = UserPasswordChangedEvent;
class UserRoleAssignedEvent {
    userId;
    oldRole;
    newRole;
    occurredOn = new Date();
    constructor(userId, oldRole, newRole) {
        this.userId = userId;
        this.oldRole = oldRole;
        this.newRole = newRole;
    }
}
exports.UserRoleAssignedEvent = UserRoleAssignedEvent;
//# sourceMappingURL=events.js.map