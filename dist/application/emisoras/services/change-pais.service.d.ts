import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangePaisUseCase } from '../ports/in/emisora.use-cases';
import { ChangePaisCommand } from '../dto/command/change-pais.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangePaisService implements IChangePaisUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangePaisCommand): Promise<EmisoraResponse>;
}
