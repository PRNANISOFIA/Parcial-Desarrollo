import { ValueObject } from '../../shared/value-object';

interface PasswordHashProps {
  value: string;
}

export class PasswordHash extends ValueObject<PasswordHashProps> {
  protected readonly props: PasswordHashProps;

  constructor(value: string) {
    super();
    if (!value?.trim()) {
      throw new Error('El hash de la contraseña no puede estar vacío');
    }
    this.props = { value };
  }

  get value(): string {
    return this.props.value;
  }
}

