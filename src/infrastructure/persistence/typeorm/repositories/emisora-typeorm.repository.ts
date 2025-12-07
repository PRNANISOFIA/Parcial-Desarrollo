import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmisoraRepository } from '../../../../domain/emisoras/emisora.repository';
import { Emisora } from '../../../../domain/emisoras/emisora.entity';
import { EmisoraId } from '../../../../domain/emisoras/value-objects/emisora-id.vo';
import { NombreEmisora } from '../../../../domain/emisoras/value-objects/nombre-emisora.vo';
import { Canal } from '../../../../domain/emisoras/value-objects/canal.vo';
import { Banda } from '../../../../domain/emisoras/value-objects/banda.vo';
import { NumeroLocutores } from '../../../../domain/emisoras/value-objects/numero-locutores.vo';
import { Genero } from '../../../../domain/emisoras/value-objects/genero.vo';
import { Horario } from '../../../../domain/emisoras/value-objects/horario.vo';
import { Patrocinador } from '../../../../domain/emisoras/value-objects/patrocinador.vo';
import { Pais } from '../../../../domain/emisoras/value-objects/pais.vo';
import { Descripcion } from '../../../../domain/emisoras/value-objects/descripcion.vo';
import { Programacion } from '../../../../domain/emisoras/programacion.entity';
import { Cobertura } from '../../../../domain/emisoras/cobertura.entity';
import { EstadoEmisora } from '../../../../domain/emisoras/value-objects/estado-emisora.vo';
import { EmisoraOrmEntity } from '../entities/emisora.orm-entity';

@Injectable()
export class EmisoraTypeOrmRepository implements EmisoraRepository {
  constructor(@InjectRepository(EmisoraOrmEntity) private readonly repo: Repository<EmisoraOrmEntity>) {}

  async findById(id: EmisoraId): Promise<Emisora | null> {
    const model = await this.repo.findOne({ where: { id: id.value } });
    return model ? this.toDomain(model) : null;
  }

  async findByNombre(nombre: NombreEmisora): Promise<Emisora | null> {
    const model = await this.repo.findOne({ where: { nombre: nombre.value } });
    return model ? this.toDomain(model) : null;
  }

  async findAll(): Promise<Emisora[]> {
    const models = await this.repo.find();
    return models.map((m) => this.toDomain(m));
  }

  async save(emisora: Emisora): Promise<void> {
    await this.repo.save(this.toOrm(emisora));
  }

  async delete(id: EmisoraId): Promise<void> {
    await this.repo.delete({ id: id.value });
  }

  private toDomain(model: EmisoraOrmEntity): Emisora {
    return Emisora.restore(
      EmisoraId.from(model.id),
      new NombreEmisora(model.nombre),
      new Canal(model.canal),
      new Banda(model.bandaFm ?? null, model.bandaAm ?? null),
      new NumeroLocutores(model.numLocutores),
      new Genero(model.genero),
      new Horario(this.toHorarioString(model.horaInicio, model.horaFin)),
      new Pais(model.pais),
      new Descripcion(model.descripcion),
      new Programacion(model.numProgramas),
      new Cobertura(model.numCiudades),
      new EstadoEmisora(model.estado),
      model.createdAt,
      model.updatedAt,
      model.patrocinador ? new Patrocinador(model.patrocinador) : null,
    );
  }

  private toOrm(emisora: Emisora): EmisoraOrmEntity {
    const [horaInicio, horaFin] = this.splitHorario(emisora.horario.value);
    return {
      id: emisora.id.value,
      nombre: emisora.nombre.value,
      canal: emisora.canal.value,
      bandaFm: emisora.banda.bandaFm ?? null,
      bandaAm: emisora.banda.bandaAm ?? null,
      numLocutores: emisora.numLocutores.value,
      genero: emisora.genero.value,
      horaInicio,
      horaFin,
      patrocinador: emisora.patrocinador?.value ?? null,
      pais: emisora.pais.value,
      descripcion: emisora.descripcion.value,
      numProgramas: emisora.programacion.numProgramas,
      numCiudades: emisora.cobertura.numCiudades,
      estado: emisora.estado.value,
      createdAt: emisora.createdAt,
      updatedAt: emisora.updatedAt ?? null,
    };
  }

  private toHorarioString(inicio: string, fin: string): string {
    const normalize = (time: string) => time?.toString().slice(0, 5);
    return `${normalize(inicio)} - ${normalize(fin)}`;
  }

  private splitHorario(horario: string): [string, string] {
    const [inicio, fin] = horario.split('-').map((p) => p.trim());
    return [inicio, fin];
  }
}
