import { Emisora } from './emisora.entity';
import { EmisoraId } from './value-objects/emisora-id.vo';
import { NombreEmisora } from './value-objects/nombre-emisora.vo';

export abstract class EmisoraRepository {
  abstract findById(id: EmisoraId): Promise<Emisora | null>;
  abstract findByNombre(nombre: NombreEmisora): Promise<Emisora | null>;
  abstract findAll(): Promise<Emisora[]>;
  abstract save(emisora: Emisora): Promise<void>;
  abstract delete(id: EmisoraId): Promise<void>;
}
