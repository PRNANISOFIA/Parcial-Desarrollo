import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeProgramasUseCase } from '../ports/in/emisora.use-cases';
import { ChangeProgramasCommand } from '../dto/command/change-programas.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeProgramasService implements IChangeProgramasUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeProgramasCommand): Promise<EmisoraResponse>;
}
