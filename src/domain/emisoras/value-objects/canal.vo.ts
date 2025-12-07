import { ValueObject } from '../../shared/value-object';

interface CanalProps {
  value: number;
}

export class Canal extends ValueObject<CanalProps> {
  protected readonly props: CanalProps;

  constructor(value: number) {
    super();
    if (value === null || value === undefined || Number.isNaN(value)) {
      throw new Error('El canal es obligatorio');
    }
    if (!Number.isInteger(value) || value <= 0) {
      throw new Error('El canal debe ser un entero positivo');
    }
    this.props = { value };
  }

  get value(): number {
    return this.props.value;
  }
}
