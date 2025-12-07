import { MigrationInterface, QueryRunner } from 'typeorm';

export class EnsureEmisorasTable1733460500000 implements MigrationInterface {
  name = 'EnsureEmisorasTable1733460500000';

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create the table only if it is really missing in the target database
    await queryRunner.query(`
      CREATE TABLE IF NOT EXISTS "emisoras" (
        "id" uuid NOT NULL,
        "nombre" character varying(120) NOT NULL,
        "canal" integer NOT NULL,
        "banda_fm" double precision,
        "banda_am" integer,
        "num_locutores" integer NOT NULL,
        "genero" character varying(50) NOT NULL,
        "hora_inicio" time NOT NULL,
        "hora_fin" time NOT NULL,
        "patrocinador" character varying(120),
        "pais" character varying(80) NOT NULL,
        "descripcion" character varying(300) NOT NULL,
        "num_programas" integer NOT NULL,
        "num_ciudades" integer NOT NULL,
        "estado" character varying(15) NOT NULL,
        "created_at" TIMESTAMP WITH TIME ZONE NOT NULL,
        "updated_at" TIMESTAMP WITH TIME ZONE,
        CONSTRAINT "PK_emisoras_id" PRIMARY KEY ("id"),
        CONSTRAINT "uq_emisora_nombre" UNIQUE ("nombre")
      );
    `);
  }

  // No destructive down to avoid dropping existing data accidentally.
  public async down(): Promise<void> {
    // intentionally empty
  }
}
