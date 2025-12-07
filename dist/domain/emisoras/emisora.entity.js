"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emisora = void 0;
const aggregate_root_1 = require("../shared/aggregate-root");
const emisora_id_vo_1 = require("./value-objects/emisora-id.vo");
const estado_emisora_vo_1 = require("./value-objects/estado-emisora.vo");
const exceptions_1 = require("./exceptions");
class Emisora extends aggregate_root_1.AggregateRoot {
    id;
    _nombre;
    _canal;
    _banda;
    _numLocutores;
    _genero;
    _horario;
    _patrocinador;
    _pais;
    _descripcion;
    _programacion;
    _cobertura;
    _estado;
    _createdAt;
    _updatedAt;
    constructor(id, _nombre, _canal, _banda, _numLocutores, _genero, _horario, _patrocinador, _pais, _descripcion, _programacion, _cobertura, _estado, _createdAt, _updatedAt) {
        super();
        this.id = id;
        this._nombre = _nombre;
        this._canal = _canal;
        this._banda = _banda;
        this._numLocutores = _numLocutores;
        this._genero = _genero;
        this._horario = _horario;
        this._patrocinador = _patrocinador;
        this._pais = _pais;
        this._descripcion = _descripcion;
        this._programacion = _programacion;
        this._cobertura = _cobertura;
        this._estado = _estado;
        this._createdAt = _createdAt;
        this._updatedAt = _updatedAt;
        this.ensureConsistencia();
    }
    static create(nombre, canal, banda, numLocutores, genero, horario, pais, descripcion, programacion, cobertura, patrocinador) {
        const emisora = new Emisora(emisora_id_vo_1.EmisoraId.new(), nombre, canal, banda, numLocutores, genero, horario, patrocinador ?? null, pais, descripcion, programacion, cobertura, new estado_emisora_vo_1.EstadoEmisora('ACTIVA'), new Date(), null);
        return emisora;
    }
    static restore(id, nombre, canal, banda, numLocutores, genero, horario, pais, descripcion, programacion, cobertura, estado, createdAt, updatedAt, patrocinador) {
        return new Emisora(id, nombre, canal, banda, numLocutores, genero, horario, patrocinador ?? null, pais, descripcion, programacion, cobertura, estado, createdAt, updatedAt);
    }
    get nombre() {
        return this._nombre;
    }
    get canal() {
        return this._canal;
    }
    get banda() {
        return this._banda;
    }
    get numLocutores() {
        return this._numLocutores;
    }
    get genero() {
        return this._genero;
    }
    get horario() {
        return this._horario;
    }
    get patrocinador() {
        return this._patrocinador;
    }
    get pais() {
        return this._pais;
    }
    get descripcion() {
        return this._descripcion;
    }
    get programacion() {
        return this._programacion;
    }
    get cobertura() {
        return this._cobertura;
    }
    get estado() {
        return this._estado;
    }
    get createdAt() {
        return this._createdAt;
    }
    get updatedAt() {
        return this._updatedAt;
    }
    actualizar(props) {
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
    cambiarBanda(banda, canal) {
        this._banda = banda;
        this._canal = canal;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarNumeroProgramas(numProgramas) {
        this._programacion.actualizar(numProgramas);
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarCobertura(numCiudades) {
        this._cobertura.actualizar(numCiudades);
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarHorario(horario) {
        this._horario = horario;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarLocutores(numLocutores) {
        this._numLocutores = numLocutores;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarDescripcion(descripcion) {
        this._descripcion = descripcion;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarPatrocinador(patrocinador) {
        this._patrocinador = patrocinador;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarPais(pais) {
        this._pais = pais;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarCanal(canal) {
        this._canal = canal;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarEstado(estado) {
        this._estado = estado;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    cambiarGenero(genero) {
        this._genero = genero;
        this.ensureConsistencia();
        this._updatedAt = new Date();
    }
    ensureConsistencia() {
        if (this._banda.isFm()) {
            if (this._canal.value < 1 || this._canal.value > 300) {
                throw new exceptions_1.ReglaConsistenciaException('El canal debe estar entre 1 y 300 para banda FM');
            }
        }
        if (this._banda.isAm()) {
            if (this._canal.value < 500 || this._canal.value > 1600) {
                throw new exceptions_1.ReglaConsistenciaException('El canal debe estar entre 500 y 1600 para banda AM');
            }
        }
        if (!(this._banda.isFm() || this._banda.isAm())) {
            throw new exceptions_1.ReglaConsistenciaException('Debe definirse una banda AM o FM');
        }
        if (this._numLocutores.value < 1) {
            throw new exceptions_1.ReglaConsistenciaException('El número de locutores debe ser al menos 1');
        }
        if (this._programacion.numProgramas < 1) {
            throw new exceptions_1.ReglaConsistenciaException('El número de programas debe ser al menos 1');
        }
        if (this._programacion.numProgramas > this._numLocutores.value * 3) {
            throw new exceptions_1.ReglaConsistenciaException('El número de programas no puede exceder 3 veces los locutores');
        }
        if (this._cobertura.numCiudades < 1) {
            throw new exceptions_1.ReglaConsistenciaException('El número de ciudades debe ser al menos 1');
        }
    }
}
exports.Emisora = Emisora;
//# sourceMappingURL=emisora.entity.js.map