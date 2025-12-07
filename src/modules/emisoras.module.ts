import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ChangeBandaService,
  ChangeCanalService,
  ChangeCoberturaService,
  ChangeDescripcionService,
  ChangeEstadoService,
  ChangeGeneroService,
  ChangeHorarioService,
  ChangeLocutoresService,
  ChangePaisService,
  ChangePatrocinadorService,
  ChangeProgramasService,
  CreateEmisoraService,
  DeleteEmisoraService,
  GetEmisoraByIdService,
  ListEmisorasService,
  UpdateEmisoraService,
} from '../application/emisoras/services';
import {
  IChangeBandaUseCase,
  IChangeCanalUseCase,
  IChangeCoberturaUseCase,
  IChangeDescripcionUseCase,
  IChangeEstadoUseCase,
  IChangeGeneroUseCase,
  IChangeHorarioUseCase,
  IChangeLocutoresUseCase,
  IChangePaisUseCase,
  IChangePatrocinadorUseCase,
  IChangeProgramasUseCase,
  ICreateEmisoraUseCase,
  IDeleteEmisoraUseCase,
  IGetEmisoraByIdUseCase,
  IListEmisorasUseCase,
  IUpdateEmisoraUseCase,
} from '../application/emisoras/ports/in/emisora.use-cases';
import { EmisoraRepository } from '../domain/emisoras/emisora.repository';
import { EmisorasController } from '../infrastructure/entrypoints/emisoras/emisoras.controller';
import { EmisoraOrmEntity } from '../infrastructure/persistence/typeorm/entities/emisora.orm-entity';
import { EmisoraTypeOrmRepository } from '../infrastructure/persistence/typeorm/repositories/emisora-typeorm.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EmisoraOrmEntity])],
  controllers: [EmisorasController],
  providers: [
    { provide: EmisoraRepository, useClass: EmisoraTypeOrmRepository },
    { provide: ICreateEmisoraUseCase, useClass: CreateEmisoraService },
    { provide: IUpdateEmisoraUseCase, useClass: UpdateEmisoraService },
    { provide: IChangeBandaUseCase, useClass: ChangeBandaService },
    { provide: IChangeProgramasUseCase, useClass: ChangeProgramasService },
    { provide: IChangeCoberturaUseCase, useClass: ChangeCoberturaService },
    { provide: IChangeHorarioUseCase, useClass: ChangeHorarioService },
    { provide: IChangeLocutoresUseCase, useClass: ChangeLocutoresService },
    { provide: IChangeDescripcionUseCase, useClass: ChangeDescripcionService },
    { provide: IChangePatrocinadorUseCase, useClass: ChangePatrocinadorService },
    { provide: IChangePaisUseCase, useClass: ChangePaisService },
    { provide: IChangeCanalUseCase, useClass: ChangeCanalService },
    { provide: IChangeEstadoUseCase, useClass: ChangeEstadoService },
    { provide: IChangeGeneroUseCase, useClass: ChangeGeneroService },
    { provide: IDeleteEmisoraUseCase, useClass: DeleteEmisoraService },
    { provide: IGetEmisoraByIdUseCase, useClass: GetEmisoraByIdService },
    { provide: IListEmisorasUseCase, useClass: ListEmisorasService },
  ],
  exports: [EmisoraRepository],
})
export class EmisorasModule {}
