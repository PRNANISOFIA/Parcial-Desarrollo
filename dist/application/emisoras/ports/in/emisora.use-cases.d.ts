import { ChangeBandaCommand } from '../../dto/command/change-banda.command';
import { ChangeCanalCommand } from '../../dto/command/change-canal.command';
import { ChangeCoberturaCommand } from '../../dto/command/change-cobertura.command';
import { ChangeDescripcionCommand } from '../../dto/command/change-descripcion.command';
import { ChangeEstadoCommand } from '../../dto/command/change-estado.command';
import { ChangeGeneroCommand } from '../../dto/command/change-genero.command';
import { ChangeHorarioCommand } from '../../dto/command/change-horario.command';
import { ChangeLocutoresCommand } from '../../dto/command/change-locutores.command';
import { ChangePaisCommand } from '../../dto/command/change-pais.command';
import { ChangePatrocinadorCommand } from '../../dto/command/change-patrocinador.command';
import { ChangeProgramasCommand } from '../../dto/command/change-programas.command';
import { CreateEmisoraCommand } from '../../dto/command/create-emisora.command';
import { DeleteEmisoraCommand } from '../../dto/command/delete-emisora.command';
import { UpdateEmisoraCommand } from '../../dto/command/update-emisora.command';
import { GetEmisoraByIdQuery } from '../../dto/query/get-emisora-by-id.query';
import { ListEmisorasQuery } from '../../dto/query/list-emisoras.query';
import { EmisoraListResponse } from '../../dto/response/emisora-list.response';
import { EmisoraResponse } from '../../dto/response/emisora.response';
export declare abstract class ICreateEmisoraUseCase {
    abstract execute(command: CreateEmisoraCommand): Promise<EmisoraResponse>;
}
export declare abstract class IUpdateEmisoraUseCase {
    abstract execute(command: UpdateEmisoraCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeBandaUseCase {
    abstract execute(command: ChangeBandaCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeProgramasUseCase {
    abstract execute(command: ChangeProgramasCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeCoberturaUseCase {
    abstract execute(command: ChangeCoberturaCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeHorarioUseCase {
    abstract execute(command: ChangeHorarioCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeLocutoresUseCase {
    abstract execute(command: ChangeLocutoresCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeDescripcionUseCase {
    abstract execute(command: ChangeDescripcionCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangePatrocinadorUseCase {
    abstract execute(command: ChangePatrocinadorCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangePaisUseCase {
    abstract execute(command: ChangePaisCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeCanalUseCase {
    abstract execute(command: ChangeCanalCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeEstadoUseCase {
    abstract execute(command: ChangeEstadoCommand): Promise<EmisoraResponse>;
}
export declare abstract class IChangeGeneroUseCase {
    abstract execute(command: ChangeGeneroCommand): Promise<EmisoraResponse>;
}
export declare abstract class IDeleteEmisoraUseCase {
    abstract execute(command: DeleteEmisoraCommand): Promise<void>;
}
export declare abstract class IGetEmisoraByIdUseCase {
    abstract execute(query: GetEmisoraByIdQuery): Promise<EmisoraResponse | null>;
}
export declare abstract class IListEmisorasUseCase {
    abstract execute(query: ListEmisorasQuery): Promise<EmisoraListResponse>;
}
