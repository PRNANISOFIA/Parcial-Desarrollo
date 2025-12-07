import { randomUUID } from 'crypto';
import { ValueObject } from '../../shared/value-object';

interface EmisoraIdProps {
  value: string;
}

export class EmisoraId extends ValueObject<EmisoraIdProps> {
  protected readonly props: EmisoraIdProps;

  private constructor(value: string) {
    super();
    if (!value) {
      throw new Error('El id de la emisora es obligatorio');
    }
    this.props = { value };
  }

  get value(): string {
    return this.props.value;
  }

  static new(): EmisoraId {
    return new EmisoraId(randomUUID());
  }

  static from(value: string): EmisoraId {
    return new EmisoraId(value);
  }
}
