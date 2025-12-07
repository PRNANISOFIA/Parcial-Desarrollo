import { ValueObject } from '../../shared/value-object';

interface RoleProps {
  value: string;
}

const ALLOWED_ROLES = ['Admin', 'User', 'Manager'];

export class Role extends ValueObject<RoleProps> {
  protected readonly props: RoleProps;

  constructor(value: string) {
    super();
    const normalized = value?.trim();
    if (!normalized) {
      throw new Error('El rol no puede estar vacío');
    }
    if (!ALLOWED_ROLES.includes(normalized)) {
      throw new Error(`Rol inválido. Roles permitidos: ${ALLOWED_ROLES.join(', ')}`);
    }
    this.props = { value: normalized };
  }

  get value(): string {
    return this.props.value;
  }
}

