import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IUpdateEmisoraUseCase } from '../ports/in/emisora.use-cases';
import { UpdateEmisoraCommand } from '../dto/command/update-emisora.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class UpdateEmisoraService implements IUpdateEmisoraUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: UpdateEmisoraCommand): Promise<EmisoraResponse>;
}
