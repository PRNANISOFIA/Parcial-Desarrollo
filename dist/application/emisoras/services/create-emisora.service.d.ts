import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { CreateEmisoraCommand } from '../dto/command/create-emisora.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
import { ICreateEmisoraUseCase } from '../ports/in/emisora.use-cases';
export declare class CreateEmisoraService implements ICreateEmisoraUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: CreateEmisoraCommand): Promise<EmisoraResponse>;
}
