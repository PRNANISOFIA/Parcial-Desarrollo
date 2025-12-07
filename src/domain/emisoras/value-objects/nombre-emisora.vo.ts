import { ValueObject } from '../../shared/value-object';

interface NombreEmisoraProps {
  value: string;
}

export class NombreEmisora extends ValueObject<NombreEmisoraProps> {
  protected readonly props: NombreEmisoraProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El nombre de la emisora es obligatorio');
    }
    if (trimmed.length < 3) {
      throw new Error('El nombre de la emisora debe tener al menos 3 caracteres');
    }
    if (/^\d+$/.test(trimmed)) {
      throw new Error('El nombre de la emisora no puede ser solo números');
    }
    this.props = { value: trimmed };
  }

  get value(): string {
    return this.props.value;
  }
}
