export declare class EmisoraOrmEntity {
    id: string;
    nombre: string;
    canal: number;
    bandaFm?: number | null;
    bandaAm?: number | null;
    numLocutores: number;
    genero: string;
    horaInicio: string;
    horaFin: string;
    patrocinador?: string | null;
    pais: string;
    descripcion: string;
    numProgramas: number;
    numCiudades: number;
    estado: string;
    createdAt: Date;
    updatedAt?: Date | null;
}
