import { ValueObject } from '../../shared/value-object';

interface UserNameProps {
  value: string;
}

export class UserName extends ValueObject<UserNameProps> {
  protected readonly props: UserNameProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El nombre de usuario no puede estar vacío');
    }
    if (trimmed.length > 50) {
      throw new Error('El nombre de usuario es demasiado largo');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}

