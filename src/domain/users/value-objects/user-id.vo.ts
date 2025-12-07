import { randomUUID } from 'crypto';
import { ValueObject } from '../../shared/value-object';

interface UserIdProps {
  value: string;
}

export class UserId extends ValueObject<UserIdProps> {
  protected readonly props: UserIdProps;

  private constructor(value: string) {
    super();
    this.props = { value };
  }

  get value(): string {
    return this.props.value;
  }

  static new(): UserId {
    return new UserId(randomUUID());
  }

  static from(value: string): UserId {
    return new UserId(value);
  }
}

