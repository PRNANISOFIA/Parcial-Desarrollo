import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class EnsureEmisorasTable1733460500000 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(): Promise<void>;
}
