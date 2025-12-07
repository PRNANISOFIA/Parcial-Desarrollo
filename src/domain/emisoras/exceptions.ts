export class EmisoraNotFoundException extends Error {
  constructor() {
    super('Emisora no encontrada');
  }
}

export class NombreEmisoraDuplicadoException extends Error {
  constructor(nombre: string) {
    super(`Ya existe una emisora con el nombre ${nombre}`);
  }
}

export class ReglaConsistenciaException extends Error {
  constructor(message: string) {
    super(message);
  }
}
