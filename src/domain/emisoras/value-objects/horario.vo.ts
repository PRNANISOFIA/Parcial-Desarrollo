import { ValueObject } from '../../shared/value-object';

interface HorarioProps {
  value: string;
  inicio: string;
  fin: string;
}

const TIME_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/;

export class Horario extends ValueObject<HorarioProps> {
  protected readonly props: HorarioProps;

  constructor(value: string) {
    super();
    const trimmed = value?.trim();
    if (!trimmed) {
      throw new Error('El horario es obligatorio');
    }
    const [inicio, fin] = trimmed.split('-').map((p) => p.trim());
    if (!inicio || !fin || !TIME_REGEX.test(inicio) || !TIME_REGEX.test(fin)) {
      throw new Error('El horario debe tener formato HH:mm - HH:mm');
    }
    if (!this.isBefore(inicio, fin)) {
      throw new Error('La hora de inicio debe ser menor que la de fin');
    }
    this.props = { value: `${inicio} - ${fin}`, inicio, fin };
  }

  get value(): string {
    return this.props.value;
  }

  private isBefore(a: string, b: string): boolean {
    const [ah, am] = a.split(':').map(Number);
    const [bh, bm] = b.split(':').map(Number);
    if (ah < bh) return true;
    if (ah === bh && am < bm) return true;
    return false;
  }
}
