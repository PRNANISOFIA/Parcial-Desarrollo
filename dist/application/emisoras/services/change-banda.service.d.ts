import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeBandaUseCase } from '../ports/in/emisora.use-cases';
import { ChangeBandaCommand } from '../dto/command/change-banda.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeBandaService implements IChangeBandaUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeBandaCommand): Promise<EmisoraResponse>;
}
