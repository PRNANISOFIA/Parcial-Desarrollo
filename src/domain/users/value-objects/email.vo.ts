import { ValueObject } from '../../shared/value-object';

interface EmailProps {
  value: string;
}

export class Email extends ValueObject<EmailProps> {
  protected readonly props: EmailProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim().toLowerCase();
    if (!trimmed) {
      throw new Error('El email no puede estar vacío');
    }
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(trimmed)) {
      throw new Error('El formato del email no es válido');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}

