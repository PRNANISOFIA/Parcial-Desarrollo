"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const aggregate_root_1 = require("../shared/aggregate-root");
const exceptions_1 = require("./exceptions");
const events_1 = require("./events");
const user_id_vo_1 = require("./value-objects/user-id.vo");
class User extends aggregate_root_1.AggregateRoot {
    id;
    _userName;
    _email;
    _passwordHash;
    _role;
    _isActive;
    _createdAt;
    _updatedAt;
    constructor(id, _userName, _email, _passwordHash, _role, _isActive, _createdAt, _updatedAt) {
        super();
        this.id = id;
        this._userName = _userName;
        this._email = _email;
        this._passwordHash = _passwordHash;
        this._role = _role;
        this._isActive = _isActive;
        this._createdAt = _createdAt;
        this._updatedAt = _updatedAt;
    }
    static create(userName, email, passwordHash, role) {
        const user = new User(user_id_vo_1.UserId.new(), userName, email, passwordHash, role, true, new Date(), null);
        user.addDomainEvent(new events_1.UserRegisteredEvent(user.id, userName, email, role));
        return user;
    }
    static restore(id, userName, email, passwordHash, role, isActive, createdAt, updatedAt) {
        return new User(id, userName, email, passwordHash, role, isActive, createdAt, updatedAt);
    }
    get userName() {
        return this._userName;
    }
    get email() {
        return this._email;
    }
    get passwordHash() {
        return this._passwordHash;
    }
    get role() {
        return this._role;
    }
    get isActive() {
        return this._isActive;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    changePassword(newHash) {
        this._passwordHash = newHash;
        this._updatedAt = new Date();
        this.addDomainEvent(new events_1.UserPasswordChangedEvent(this.id));
    }
    rename(newUserName) {
        this._userName = newUserName;
        this.touch();
    }
    assignRole(newRole) {
        const oldRole = this._role;
        if (oldRole.equals(newRole))
            return;
        this._role = newRole;
        this.touch();
        this.addDomainEvent(new events_1.UserRoleAssignedEvent(this.id, oldRole, newRole));
    }
    deactivate() {
        if (!this._isActive)
            throw new exceptions_1.UserAlreadyInactiveException();
        this._isActive = false;
        this.touch();
    }
    reactivate() {
        if (this._isActive)
            throw new exceptions_1.UserAlreadyActiveException();
        this._isActive = true;
        this.touch();
    }
    updateEmail(email) {
        this._email = email;
        this.touch();
    }
    touch() {
        this._updatedAt = new Date();
    }
}
exports.User = User;
//# sourceMappingURL=user.entity.js.map