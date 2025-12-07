import { AggregateRoot } from '../shared/aggregate-root';
import {
  UserAlreadyActiveException,
  UserAlreadyInactiveException,
} from './exceptions';
import {
  UserPasswordChangedEvent,
  UserRegisteredEvent,
  UserRoleAssignedEvent,
} from './events';
import { Email } from './value-objects/email.vo';
import { PasswordHash } from './value-objects/password-hash.vo';
import { Role } from './value-objects/role.vo';
import { UserId } from './value-objects/user-id.vo';
import { UserName } from './value-objects/user-name.vo';

export class User extends AggregateRoot {
  private constructor(
    public readonly id: UserId,
    private _userName: UserName,
    private _email: Email,
    private _passwordHash: PasswordHash,
    private _role: Role,
    private _isActive: boolean,
    private _createdAt: Date,
    private _updatedAt?: Date | null,
  ) {
    super();
  }

  static create(userName: UserName, email: Email, passwordHash: PasswordHash, role: Role): User {
    const user = new User(UserId.new(), userName, email, passwordHash, role, true, new Date(), null);
    user.addDomainEvent(new UserRegisteredEvent(user.id, userName, email, role));
    return user;
  }

  static restore(
    id: UserId,
    userName: UserName,
    email: Email,
    passwordHash: PasswordHash,
    role: Role,
    isActive: boolean,
    createdAt: Date,
    updatedAt?: Date | null,
  ): User {
    return new User(id, userName, email, passwordHash, role, isActive, createdAt, updatedAt);
  }

  get userName(): UserName {
    return this._userName;
  }

  get email(): Email {
    return this._email;
  }

  get passwordHash(): PasswordHash {
    return this._passwordHash;
  }

  get role(): Role {
    return this._role;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updatedAt(): Date | null | undefined {
    return this._updatedAt;
  }

  changePassword(newHash: PasswordHash): void {
    this._passwordHash = newHash;
    this._updatedAt = new Date();
    this.addDomainEvent(new UserPasswordChangedEvent(this.id));
  }

  rename(newUserName: UserName): void {
    this._userName = newUserName;
    this.touch();
  }

  assignRole(newRole: Role): void {
    const oldRole = this._role;
    if (oldRole.equals(newRole)) return;
    this._role = newRole;
    this.touch();
    this.addDomainEvent(new UserRoleAssignedEvent(this.id, oldRole, newRole));
  }

  deactivate(): void {
    if (!this._isActive) throw new UserAlreadyInactiveException();
    this._isActive = false;
    this.touch();
  }

  reactivate(): void {
    if (this._isActive) throw new UserAlreadyActiveException();
    this._isActive = true;
    this.touch();
  }

  updateEmail(email: Email): void {
    this._email = email;
    this.touch();
  }

  private touch(): void {
    this._updatedAt = new Date();
  }
}
