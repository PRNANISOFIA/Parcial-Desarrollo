import { ValueObject } from '../../shared/value-object';

interface GeneroProps {
  value: string;
}

export class Genero extends ValueObject<GeneroProps> {
  protected readonly props: GeneroProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El género es obligatorio');
    }
    if (!/^[A-Za-zÀ-ÿ\s]+$/.test(trimmed)) {
      throw new Error('El género solo puede contener letras');
    }
    if (trimmed.length < 3 || trimmed.length > 30) {
      throw new Error('El género debe tener entre 3 y 30 caracteres');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
