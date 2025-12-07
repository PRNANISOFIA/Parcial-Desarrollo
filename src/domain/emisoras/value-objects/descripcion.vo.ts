import { ValueObject } from '../../shared/value-object';

interface DescripcionProps {
  value: string;
}

export class Descripcion extends ValueObject<DescripcionProps> {
  protected readonly props: DescripcionProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('La descripción es obligatoria');
    }
    if (trimmed.length < 20 || trimmed.length > 300) {
      throw new Error('La descripción debe tener entre 20 y 300 caracteres');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
