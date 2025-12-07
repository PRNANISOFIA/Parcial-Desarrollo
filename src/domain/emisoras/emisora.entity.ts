import { AggregateRoot } from '../shared/aggregate-root';
import { Banda } from './value-objects/banda.vo';
import { Canal } from './value-objects/canal.vo';
import { Descripcion } from './value-objects/descripcion.vo';
import { EmisoraId } from './value-objects/emisora-id.vo';
import { EstadoEmisora } from './value-objects/estado-emisora.vo';
import { Genero } from './value-objects/genero.vo';
import { Horario } from './value-objects/horario.vo';
import { NombreEmisora } from './value-objects/nombre-emisora.vo';
import { NumeroLocutores } from './value-objects/numero-locutores.vo';
import { Pais } from './value-objects/pais.vo';
import { Patrocinador } from './value-objects/patrocinador.vo';
import { Cobertura } from './cobertura.entity';
import { Programacion } from './programacion.entity';
import { ReglaConsistenciaException } from './exceptions';

interface ActualizarProps {
  canal?: Canal;
  banda?: Banda;
  numLocutores?: NumeroLocutores;
  genero?: Genero;
  horario?: Horario;
  patrocinador?: Patrocinador | null;
  pais?: Pais;
  descripcion?: Descripcion;
  programacion?: Programacion;
  cobertura?: Cobertura;
  estado?: EstadoEmisora;
}

export class Emisora extends AggregateRoot {
  private constructor(
    public readonly id: EmisoraId,
    private _nombre: NombreEmisora,
    private _canal: Canal,
    private _banda: Banda,
    private _numLocutores: NumeroLocutores,
    private _genero: Genero,
    private _horario: Horario,
    private _patrocinador: Patrocinador | null,
    private _pais: Pais,
    private _descripcion: Descripcion,
    private _programacion: Programacion,
    private _cobertura: Cobertura,
    private _estado: EstadoEmisora,
    private _createdAt: Date,
    private _updatedAt?: Date | null,
  ) {
    super();
    this.ensureConsistencia();
  }

  static create(
    nombre: NombreEmisora,
    canal: Canal,
    banda: Banda,
    numLocutores: NumeroLocutores,
    genero: Genero,
    horario: Horario,
    pais: Pais,
    descripcion: Descripcion,
    programacion: Programacion,
    cobertura: Cobertura,
    patrocinador?: Patrocinador | null,
  ): Emisora {
    const emisora = new Emisora(
      EmisoraId.new(),
      nombre,
      canal,
      banda,
      numLocutores,
      genero,
      horario,
      patrocinador ?? null,
      pais,
      descripcion,
      programacion,
      cobertura,
      new EstadoEmisora('ACTIVA'),
      new Date(),
      null,
    );
    return emisora;
  }

  static restore(
    id: EmisoraId,
    nombre: NombreEmisora,
    canal: Canal,
    banda: Banda,
    numLocutores: NumeroLocutores,
    genero: Genero,
    horario: Horario,
    pais: Pais,
    descripcion: Descripcion,
    programacion: Programacion,
    cobertura: Cobertura,
    estado: EstadoEmisora,
    createdAt: Date,
    updatedAt?: Date | null,
    patrocinador?: Patrocinador | null,
  ): Emisora {
    return new Emisora(
      id,
      nombre,
      canal,
      banda,
      numLocutores,
      genero,
      horario,
      patrocinador ?? null,
      pais,
      descripcion,
      programacion,
      cobertura,
      estado,
      createdAt,
      updatedAt,
    );
  }

  get nombre(): NombreEmisora {
    return this._nombre;
  }
  get canal(): Canal {
    return this._canal;
  }
  get banda(): Banda {
    return this._banda;
  }
  get numLocutores(): NumeroLocutores {
    return this._numLocutores;
  }
  get genero(): Genero {
    return this._genero;
  }
  get horario(): Horario {
    return this._horario;
  }
  get patrocinador(): Patrocinador | null {
    return this._patrocinador;
  }
  get pais(): Pais {
    return this._pais;
  }
  get descripcion(): Descripcion {
    return this._descripcion;
  }
  get programacion(): Programacion {
    return this._programacion;
  }
  get cobertura(): Cobertura {
    return this._cobertura;
  }
  get estado(): EstadoEmisora {
    return this._estado;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date | null | undefined {
    return this._updatedAt;
  }

  actualizar(props: ActualizarProps): void {
    this._canal = props.canal ?? this._canal;
    this._banda = props.banda ?? this._banda;
    this._numLocutores = props.numLocutores ?? this._numLocutores;
    this._genero = props.genero ?? this._genero;
    this._horario = props.horario ?? this._horario;
    if (props.patrocinador !== undefined) {
      this._patrocinador = props.patrocinador;
    }
    this._pais = props.pais ?? this._pais;
    this._descripcion = props.descripcion ?? this._descripcion;
    this._programacion = props.programacion ?? this._programacion;
    this._cobertura = props.cobertura ?? this._cobertura;
    this._estado = props.estado ?? this._estado;

    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarBanda(banda: Banda, canal: Canal): void {
    this._banda = banda;
    this._canal = canal;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarNumeroProgramas(numProgramas: number): void {
    this._programacion.actualizar(numProgramas);
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarCobertura(numCiudades: number): void {
    this._cobertura.actualizar(numCiudades);
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarHorario(horario: Horario): void {
    this._horario = horario;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarLocutores(numLocutores: NumeroLocutores): void {
    this._numLocutores = numLocutores;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarDescripcion(descripcion: Descripcion): void {
    this._descripcion = descripcion;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarPatrocinador(patrocinador: Patrocinador | null): void {
    this._patrocinador = patrocinador;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarPais(pais: Pais): void {
    this._pais = pais;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarCanal(canal: Canal): void {
    this._canal = canal;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarEstado(estado: EstadoEmisora): void {
    this._estado = estado;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  cambiarGenero(genero: Genero): void {
    this._genero = genero;
    this.ensureConsistencia();
    this._updatedAt = new Date();
  }

  private ensureConsistencia(): void {
    if (this._banda.isFm()) {
      if (this._canal.value < 1 || this._canal.value > 300) {
        throw new ReglaConsistenciaException('El canal debe estar entre 1 y 300 para banda FM');
      }
    }
    if (this._banda.isAm()) {
      if (this._canal.value < 500 || this._canal.value > 1600) {
        throw new ReglaConsistenciaException('El canal debe estar entre 500 y 1600 para banda AM');
      }
    }
    if (!(this._banda.isFm() || this._banda.isAm())) {
      throw new ReglaConsistenciaException('Debe definirse una banda AM o FM');
    }
    if (this._numLocutores.value < 1) {
      throw new ReglaConsistenciaException('El número de locutores debe ser al menos 1');
    }
    if (this._programacion.numProgramas < 1) {
      throw new ReglaConsistenciaException('El número de programas debe ser al menos 1');
    }
    if (this._programacion.numProgramas > this._numLocutores.value * 3) {
      throw new ReglaConsistenciaException('El número de programas no puede exceder 3 veces los locutores');
    }
    if (this._cobertura.numCiudades < 1) {
      throw new ReglaConsistenciaException('El número de ciudades debe ser al menos 1');
    }
  }
}
