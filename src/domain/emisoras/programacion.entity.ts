export class Programacion {
  constructor(private _numProgramas: number) {
    if (!Number.isInteger(_numProgramas) || _numProgramas < 1) {
      throw new Error('El número de programas debe ser un entero mayor o igual a 1');
    }
  }

  get numProgramas(): number {
    return this._numProgramas;
  }

  actualizar(value: number): void {
    if (!Number.isInteger(value) || value < 1) {
      throw new Error('El número de programas debe ser un entero mayor o igual a 1');
    }
    this._numProgramas = value;
  }
}
