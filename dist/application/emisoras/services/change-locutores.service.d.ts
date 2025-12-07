import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangeLocutoresUseCase } from '../ports/in/emisora.use-cases';
import { ChangeLocutoresCommand } from '../dto/command/change-locutores.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangeLocutoresService implements IChangeLocutoresUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangeLocutoresCommand): Promise<EmisoraResponse>;
}
