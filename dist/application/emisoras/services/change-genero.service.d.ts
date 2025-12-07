import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeGeneroUseCase } from '../ports/in/emisora.use-cases';
import { ChangeGeneroCommand } from '../dto/command/change-genero.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeGeneroService implements IChangeGeneroUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeGeneroCommand): Promise<EmisoraResponse>;
}
