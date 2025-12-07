export interface EmisoraResponse {
  id: string;
  nombre: string;
  canal: number;
  bandaFm: number | null;
  bandaAm: number | null;
  numLocutores: number;
  genero: string;
  horario: string;
  patrocinador: string | null;
  pais: string;
  descripcion: string;
  numProgramas: number;
  numCiudades: number;
  estado: string;
  createdAt: Date;
  updatedAt: Date | null;
}
