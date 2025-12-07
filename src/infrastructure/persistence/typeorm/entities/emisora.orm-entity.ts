import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'emisoras' })
@Unique('uq_emisora_nombre', ['nombre'])
export class EmisoraOrmEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ length: 120 })
  nombre!: string;

  @Column({ type: 'int' })
  canal!: number;

  @Column({ name: 'banda_fm', type: 'double precision', nullable: true })
  bandaFm?: number | null;

  @Column({ name: 'banda_am', type: 'int', nullable: true })
  bandaAm?: number | null;

  @Column({ name: 'num_locutores', type: 'int' })
  numLocutores!: number;

  @Column({ length: 50 })
  genero!: string;

  @Column({ name: 'hora_inicio', type: 'time' })
  horaInicio!: string;

  @Column({ name: 'hora_fin', type: 'time' })
  horaFin!: string;

  // Explicit type avoids reflect-metadata emitting Object for nullable unions
  @Column({ type: 'varchar', length: 120, nullable: true })
  patrocinador?: string | null;

  @Column({ length: 80 })
  pais!: string;

  @Column({ type: 'varchar', length: 300 })
  descripcion!: string;

  @Column({ name: 'num_programas', type: 'int' })
  numProgramas!: number;

  @Column({ name: 'num_ciudades', type: 'int' })
  numCiudades!: number;

  @Column({ length: 15 })
  estado!: string;

  @Column({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt!: Date;

  @Column({ name: 'updated_at', type: 'timestamp with time zone', nullable: true })
  updatedAt?: Date | null;
}
