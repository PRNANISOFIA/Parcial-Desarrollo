import { ValueObject } from '../../shared/value-object';

interface PaisProps {
  value: string;
}

export class Pais extends ValueObject<PaisProps> {
  protected readonly props: PaisProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El país es obligatorio');
    }
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(trimmed)) {
      throw new Error('El país solo puede contener letras');
    }
    if (trimmed.length < 3) {
      throw new Error('El país debe tener al menos 3 caracteres');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
