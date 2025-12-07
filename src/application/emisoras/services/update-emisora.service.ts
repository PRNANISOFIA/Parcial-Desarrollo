import { Injectable } from '@nestjs/common';
import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IUpdateEmisoraUseCase } from '../ports/in/emisora.use-cases';
import { UpdateEmisoraCommand } from '../dto/command/update-emisora.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { EmisoraMapper } from '../mapper/emisora.mapper';
import { EmisoraId } from '../../../domain/emisoras/value-objects/emisora-id.vo';
import { EmisoraNotFoundException } from '../../../domain/emisoras/exceptions';
import { Canal } from '../../../domain/emisoras/value-objects/canal.vo';
import { Banda } from '../../../domain/emisoras/value-objects/banda.vo';
import { NumeroLocutores } from '../../../domain/emisoras/value-objects/numero-locutores.vo';
import { Genero } from '../../../domain/emisoras/value-objects/genero.vo';
import { Horario } from '../../../domain/emisoras/value-objects/horario.vo';
import { Patrocinador } from '../../../domain/emisoras/value-objects/patrocinador.vo';
import { Pais } from '../../../domain/emisoras/value-objects/pais.vo';
import { Descripcion } from '../../../domain/emisoras/value-objects/descripcion.vo';
import { Programacion } from '../../../domain/emisoras/programacion.entity';
import { Cobertura } from '../../../domain/emisoras/cobertura.entity';
import { EstadoEmisora } from '../../../domain/emisoras/value-objects/estado-emisora.vo';

@Injectable()
export class UpdateEmisoraService implements IUpdateEmisoraUseCase {
  constructor(private readonly emisoraRepository: EmisoraRepository) {}

  async execute(command: UpdateEmisoraCommand): Promise<EmisoraResponse> {
    const emisora = await this.emisoraRepository.findById(EmisoraId.from(command.id));
    if (!emisora) {
      throw new EmisoraNotFoundException();
    }

    emisora.actualizar({
      canal: command.canal !== undefined ? new Canal(command.canal) : undefined,
      banda:
        command.bandaAm !== undefined || command.bandaFm !== undefined
          ? new Banda(command.bandaFm ?? null, command.bandaAm ?? null)
          : undefined,
      numLocutores: command.numLocutores !== undefined ? new NumeroLocutores(command.numLocutores) : undefined,
      genero: command.genero ? new Genero(command.genero) : undefined,
      horario: command.horario ? new Horario(command.horario) : undefined,
      patrocinador:
        command.patrocinador !== undefined
          ? command.patrocinador
            ? new Patrocinador(command.patrocinador)
            : null
          : undefined,
      pais: command.pais ? new Pais(command.pais) : undefined,
      descripcion: command.descripcion ? new Descripcion(command.descripcion) : undefined,
      programacion: command.numProgramas !== undefined ? new Programacion(command.numProgramas) : undefined,
      cobertura: command.numCiudades !== undefined ? new Cobertura(command.numCiudades) : undefined,
      estado: command.estado ? new EstadoEmisora(command.estado) : undefined,
    });

    await this.emisoraRepository.save(emisora);
    return EmisoraMapper.toResponse(emisora);
  }
}
