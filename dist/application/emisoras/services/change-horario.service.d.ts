import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeHorarioUseCase } from '../ports/in/emisora.use-cases';
import { ChangeHorarioCommand } from '../dto/command/change-horario.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeHorarioService implements IChangeHorarioUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeHorarioCommand): Promise<EmisoraResponse>;
}
