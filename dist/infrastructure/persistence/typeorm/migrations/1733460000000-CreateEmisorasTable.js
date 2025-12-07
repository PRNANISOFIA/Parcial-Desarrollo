"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmisorasTable1733460000000 = void 0;
class CreateEmisorasTable1733460000000 {
    name = 'CreateEmisorasTable1733460000000';
    async up(queryRunner) {
        const exists = await queryRunner.hasTable('emisoras');
        if (exists) {
            return;
        }
        await queryRunner.query(`
      CREATE TABLE "emisoras" (
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
      )
    `);
    }
    async down(queryRunner) {
        const exists = await queryRunner.hasTable('emisoras');
        if (exists) {
            await queryRunner.query(`DROP TABLE "emisoras"`);
        }
    }
}
exports.CreateEmisorasTable1733460000000 = CreateEmisorasTable1733460000000;
//# sourceMappingURL=1733460000000-CreateEmisorasTable.js.map