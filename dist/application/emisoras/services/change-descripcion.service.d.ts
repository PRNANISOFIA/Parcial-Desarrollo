import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeDescripcionUseCase } from '../ports/in/emisora.use-cases';
import { ChangeDescripcionCommand } from '../dto/command/change-descripcion.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeDescripcionService implements IChangeDescripcionUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeDescripcionCommand): Promise<EmisoraResponse>;
}
