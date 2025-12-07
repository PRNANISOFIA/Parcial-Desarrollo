import { DomainEvent } from '../shared/domain-event';
import { Email } from './value-objects/email.vo';
import { Role } from './value-objects/role.vo';
import { UserId } from './value-objects/user-id.vo';
import { UserName } from './value-objects/user-name.vo';

export class UserRegisteredEvent implements DomainEvent {
  occurredOn = new Date();
  constructor(
    public readonly userId: UserId,
    public readonly userName: UserName,
    public readonly email: Email,
    public readonly role: Role,
  ) {}
}

export class UserPasswordChangedEvent implements DomainEvent {
  occurredOn = new Date();
  constructor(public readonly userId: UserId) {}
}

export class UserRoleAssignedEvent implements DomainEvent {
  occurredOn = new Date();
  constructor(
    public readonly userId: UserId,
    public readonly oldRole: Role,
    public readonly newRole: Role,
  ) {}
}

