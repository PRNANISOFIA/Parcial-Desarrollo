import { EmisoraRepository } from '../../../domain/emisoras/emisora.repository';
import { IChangePatrocinadorUseCase } from '../ports/in/emisora.use-cases';
import { ChangePatrocinadorCommand } from '../dto/command/change-patrocinador.command';
import { EmisoraResponse } from '../dto/response/emisora.response';
export declare class ChangePatrocinadorService implements IChangePatrocinadorUseCase {
    private readonly emisoraRepository;
    constructor(emisoraRepository: EmisoraRepository);
    execute(command: ChangePatrocinadorCommand): Promise<EmisoraResponse>;
}
