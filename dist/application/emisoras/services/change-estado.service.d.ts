import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeEstadoUseCase } from '../ports/in/emisora.use-cases';
import { ChangeEstadoCommand } from '../dto/command/change-estado.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeEstadoService implements IChangeEstadoUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeEstadoCommand): Promise<EmisoraResponse>;
}
