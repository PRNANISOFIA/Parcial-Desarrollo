import { ValueObject } from '../../shared/value-object';

export type EstadoEmisoraTipo = 'ACTIVA' | 'INACTIVA';

interface EstadoEmisoraProps {
  value: EstadoEmisoraTipo;
}

const ESTADOS: EstadoEmisoraTipo[] = ['ACTIVA', 'INACTIVA'];

export class EstadoEmisora extends ValueObject<EstadoEmisoraProps> {
  protected readonly props: EstadoEmisoraProps;

  constructor(value: string) {
    super();
    const upper = value?.trim().toUpperCase() as EstadoEmisoraTipo;
    if (!upper) {
      throw new Error('El estado de la emisora es obligatorio');
    }
    if (!ESTADOS.includes(upper)) {
      throw new Error('El estado de la emisora no es válido');
    }
    this.props = { value: upper };
  }

  get value(): EstadoEmisoraTipo {
    return this.props.value;
  }
}
