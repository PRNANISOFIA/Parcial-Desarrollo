import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeCanalUseCase } from '../ports/in/emisora.use-cases';
import { ChangeCanalCommand } from '../dto/command/change-canal.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeCanalService implements IChangeCanalUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeCanalCommand): Promise<EmisoraResponse>;
}
