import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IDeleteEmisoraUseCase } from '../ports/in/emisora.use-cases';
import { DeleteEmisoraCommand } from '../dto/command/delete-emisora.command';
export declare class DeleteEmisoraService implements IDeleteEmisoraUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: DeleteEmisoraCommand): Promise<void>;
}
