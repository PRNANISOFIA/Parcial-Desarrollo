import { Repository } from 'typeorm';
import { EmisoraRepository } from '../../../../domain/emisoras/emisora.repository';
import { Emisora } from '../../../../domain/emisoras/emisora.entity';
import { EmisoraId } from '../../../../domain/emisoras/value-objects/emisora-id.vo';
import { NombreEmisora } from '../../../../domain/emisoras/value-objects/nombre-emisora.vo';
import { EmisoraOrmEntity } from '../entities/emisora.orm-entity';
export declare class EmisoraTypeOrmRepository implements EmisoraRepository {
    private readonly repo;
    constructor(repo: Repository<EmisoraOrmEntity>);
    findById(id: EmisoraId): Promise<Emisora | null>;
    findByNombre(nombre: NombreEmisora): Promise<Emisora | null>;
    findAll(): Promise<Emisora[]>;
    save(emisora: Emisora): Promise<void>;
    delete(id: EmisoraId): Promise<void>;
    private toDomain;
    private toOrm;
    private toHorarioString;
    private splitHorario;
}
