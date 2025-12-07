export class Cobertura {
  constructor(private _numCiudades: number) {
    if (!Number.isInteger(_numCiudades) || _numCiudades < 1) {
      throw new Error('El número de ciudades debe ser mayor o igual a 1');
    }
  }

  get numCiudades(): number {
    return this._numCiudades;
  }

  actualizar(value: number): void {
    if (!Number.isInteger(value) || value < 1) {
      throw new Error('El número de ciudades debe ser mayor o igual a 1');
    }
    this._numCiudades = value;
  }
}
