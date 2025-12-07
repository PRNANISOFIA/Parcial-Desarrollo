import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeCoberturaUseCase } from '../ports/in/emisora.use-cases';
import { ChangeCoberturaCommand } from '../dto/command/change-cobertura.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeCoberturaService implements IChangeCoberturaUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeCoberturaCommand): Promise<EmisoraResponse>;
}
