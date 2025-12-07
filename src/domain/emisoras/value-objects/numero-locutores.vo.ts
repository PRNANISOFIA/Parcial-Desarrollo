import { ValueObject } from '../../shared/value-object';

interface NumeroLocutoresProps {
  value: number;
}

export class NumeroLocutores extends ValueObject<NumeroLocutoresProps> {
  protected readonly props: NumeroLocutoresProps;

  constructor(value: number) {
    super();
    if (!Number.isInteger(value) || value < 1) {
      throw new Error('El número de locutores debe ser un entero mayor o igual a 1');
    }
    this.props = { value };
  }

  get value(): number {
    return this.props.value;
  }
}
