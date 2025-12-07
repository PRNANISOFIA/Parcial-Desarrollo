import { ValueObject } from '../../shared/value-object';

interface PatrocinadorProps {
  value: string;
}

export class Patrocinador extends ValueObject<PatrocinadorProps> {
  protected readonly props: PatrocinadorProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El patrocinador es obligatorio');
    }
    if (trimmed.length < 2) {
      throw new Error('El patrocinador debe tener al menos 2 caracteres');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
