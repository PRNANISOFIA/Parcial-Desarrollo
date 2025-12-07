import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { Emisora } from '../../../domain/emisoras/emisora.entity';
import { Banda } from '../../../domain/emisoras/value-objects/banda.vo';
import { Canal } from '../../../domain/emisoras/value-objects/canal.vo';
import { Descripcion } from '../../../domain/emisoras/value-objects/descripcion.vo';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EstadoEmisora } from '../../../domain/emisoras/value-objects/estado-emisora.vo';
import { Genero } from '../../../domain/emisoras/value-objects/genero.vo';
import { Horario } from '../../../domain/emisoras/value-objects/horario.vo';
import { NombreEmisora } from '../../../domain/emisoras/value-objects/nombre-emisora.vo';
import { NumeroLocutores } from '../../../domain/emisoras/value-objects/numero-locutores.vo';
import { Pais } from '../../../domain/emisoras/value-objects/pais.vo';
import { Patrocinador } from '../../../domain/emisoras/value-objects/patrocinador.vo';
import { Cobertura } from '../../../domain/emisoras/cobertura.entity';
import { Programacion } from '../../../domain/emisoras/programacion.entity';
import { CreateEmisoraCommand } from '../dto/command/create-emisora.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { ICreateEmisoraUseCase } from '../ports/in/emisora.use-cases';
import { NombreEmisoraDuplicadoException } from '../../../domain/emisoras/exceptions';

@Injectable()
export class CreateEmisoraService implements ICreateEmisoraUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: CreateEmisoraCommand): Promise<EmisoraResponse> {
    const nombre = new NombreEmisora(command.nombre);
    const existente = await this.emisoraRepository.findByNombre(nombre);
    if (existente) {
      throw new NombreEmisoraDuplicadoException(command.nombre);
    }

    const emisora = Emisora.create(
      nombre,
      new Canal(command.canal),
      new Banda(command.bandaFm ?? null, command.bandaAm ?? null),
      new NumeroLocutores(command.numLocutores),
      new Genero(command.genero),
      new Horario(command.horario),
      new Pais(command.pais),
      new Descripcion(command.descripcion),
      new Programacion(command.numProgramas),
      new Cobertura(command.numCiudades),
      command.patrocinador ? new Patrocinador(command.patrocinador) : null,
    );

    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
