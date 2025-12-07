import { DomainEvent } from '../shared/domain-event';
import { Email } from './value-objects/email.vo';
import { Role } from './value-objects/role.vo';
import { UserId } from './value-objects/user-id.vo';
import { UserName } from './value-objects/user-name.vo';
export declare class UserRegisteredEvent implements DomainEvent {
    readonly userId: UserId;
    readonly userName: UserName;
    readonly email: Email;
    readonly role: Role;
    occurredOn: Date;
    constructor(userId: UserId, userName: UserName, email: Email, role: Role);
}
export declare class UserPasswordChangedEvent implements DomainEvent {
    readonly userId: UserId;
    occurredOn: Date;
    constructor(userId: UserId);
}
export declare class UserRoleAssignedEvent implements DomainEvent {
    readonly userId: UserId;
    readonly oldRole: Role;
    readonly newRole: Role;
    occurredOn: Date;
    constructor(userId: UserId, oldRole: Role, newRole: Role);
}
