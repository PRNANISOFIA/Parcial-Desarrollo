import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UseFilters } from '@nestjs/common';
import { ApiParam, ApiQuery } from '@nestjs/swagger';
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
} from '../../../application/emisoras/ports/in/emisora.use-cases';
import { CreateEmisoraRequest } from './dto/create-emisora.request';
import { UpdateEmisoraRequest } from './dto/update-emisora.request';
import { ChangeBandaRequest } from './dto/change-banda.request';
import { ChangeProgramasRequest } from './dto/change-programas.request';
import { ChangeCoberturaRequest } from './dto/change-cobertura.request';
import { ChangeHorarioRequest } from './dto/change-horario.request';
import { ChangeLocutoresRequest } from './dto/change-locutores.request';
import { ChangeDescripcionRequest } from './dto/change-descripcion.request';
import { ChangePatrocinadorRequest } from './dto/change-patrocinador.request';
import { ChangePaisRequest } from './dto/change-pais.request';
import { ChangeCanalRequest } from './dto/change-canal.request';
import { ChangeEstadoRequest } from './dto/change-estado.request';
import { ChangeGeneroRequest } from './dto/change-genero.request';
import { CreateEmisoraCommand } from '../../../application/emisoras/dto/command/create-emisora.command';
import { UpdateEmisoraCommand } from '../../../application/emisoras/dto/command/update-emisora.command';
import { ChangeBandaCommand } from '../../../application/emisoras/dto/command/change-banda.command';
import { ChangeProgramasCommand } from '../../../application/emisoras/dto/command/change-programas.command';
import { ChangeCoberturaCommand } from '../../../application/emisoras/dto/command/change-cobertura.command';
import { ChangeHorarioCommand } from '../../../application/emisoras/dto/command/change-horario.command';
import { ChangeLocutoresCommand } from '../../../application/emisoras/dto/command/change-locutores.command';
import { ChangeDescripcionCommand } from '../../../application/emisoras/dto/command/change-descripcion.command';
import { ChangePatrocinadorCommand } from '../../../application/emisoras/dto/command/change-patrocinador.command';
import { ChangePaisCommand } from '../../../application/emisoras/dto/command/change-pais.command';
import { ChangeCanalCommand } from '../../../application/emisoras/dto/command/change-canal.command';
import { ChangeEstadoCommand } from '../../../application/emisoras/dto/command/change-estado.command';
import { ChangeGeneroCommand } from '../../../application/emisoras/dto/command/change-genero.command';
import { DeleteEmisoraCommand } from '../../../application/emisoras/dto/command/delete-emisora.command';
import { GetEmisoraByIdQuery } from '../../../application/emisoras/dto/query/get-emisora-by-id.query';
import { ListEmisorasQuery } from '../../../application/emisoras/dto/query/list-emisoras.query';
import { DomainExceptionFilter } from '../common/domain-exception.filter';

@Controller('emisoras')
@UseFilters(new DomainExceptionFilter())
export class EmisorasController {
  constructor(
    private readonly createUseCase: ICreateEmisoraUseCase,
    private readonly updateUseCase: IUpdateEmisoraUseCase,
    private readonly changeBandaUseCase: IChangeBandaUseCase,
    private readonly changeProgramasUseCase: IChangeProgramasUseCase,
    private readonly changeCoberturaUseCase: IChangeCoberturaUseCase,
    private readonly changeHorarioUseCase: IChangeHorarioUseCase,
    private readonly changeLocutoresUseCase: IChangeLocutoresUseCase,
    private readonly changeDescripcionUseCase: IChangeDescripcionUseCase,
    private readonly changePatrocinadorUseCase: IChangePatrocinadorUseCase,
    private readonly changePaisUseCase: IChangePaisUseCase,
    private readonly changeCanalUseCase: IChangeCanalUseCase,
    private readonly changeEstadoUseCase: IChangeEstadoUseCase,
    private readonly changeGeneroUseCase: IChangeGeneroUseCase,
    private readonly deleteUseCase: IDeleteEmisoraUseCase,
    private readonly getByIdUseCase: IGetEmisoraByIdUseCase,
    private readonly listUseCase: IListEmisorasUseCase,
  ) {}

  @Post()
  create(@Body() request: CreateEmisoraRequest) {
    const command = request as unknown as CreateEmisoraCommand;
    return this.createUseCase.execute(command);
  }

  @Get(':id')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  getById(@Param('id') id: string) {
    const query = new GetEmisoraByIdQuery();
    query.id = id;
    return this.getByIdUseCase.execute(query);
  }

  @Get()
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'pageSize', required: false, type: Number })
  @ApiQuery({ name: 'genero', required: false, type: String })
  @ApiQuery({ name: 'pais', required: false, type: String })
  @ApiQuery({ name: 'banda', required: false, type: String })
  @ApiQuery({ name: 'estado', required: false, type: String })
  @ApiQuery({ name: 'searchTerm', required: false, type: String })
  list(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('genero') genero?: string,
    @Query('pais') pais?: string,
    @Query('banda') banda?: string,
    @Query('estado') estado?: string,
    @Query('searchTerm') searchTerm?: string,
  ) {
    const query = new ListEmisorasQuery();
    query.page = Number(page) || 1;
    query.pageSize = Number(pageSize) || 10;
    query.genero = genero;
    query.pais = pais;
    query.banda = banda;
    query.estado = estado;
    query.searchTerm = searchTerm;
    return this.listUseCase.execute(query);
  }

  @Put(':id')
  @ApiParam({ name: 'id', example: '04376f12-2f63-49d0-92af-8a93a06ca7ab' })
  update(@Param('id') id: string, @Body() request: UpdateEmisoraRequest) {
    const command = request as unknown as UpdateEmisoraCommand;
    command.id = id;
    return this.updateUseCase.execute(command);
  }

  @Patch(':id/banda')
  @ApiParam({ name: 'id' })
  changeBanda(@Param('id') id: string, @Body() request: ChangeBandaRequest) {
    const command = request as unknown as ChangeBandaCommand;
    command.id = id;
    return this.changeBandaUseCase.execute(command);
  }

  @Patch(':id/programas')
  @ApiParam({ name: 'id' })
  changeProgramas(@Param('id') id: string, @Body() request: ChangeProgramasRequest) {
    const command = request as unknown as ChangeProgramasCommand;
    command.id = id;
    return this.changeProgramasUseCase.execute(command);
  }

  @Patch(':id/cobertura')
  @ApiParam({ name: 'id' })
  changeCobertura(@Param('id') id: string, @Body() request: ChangeCoberturaRequest) {
    const command = request as unknown as ChangeCoberturaCommand;
    command.id = id;
    return this.changeCoberturaUseCase.execute(command);
  }

  @Patch(':id/horario')
  @ApiParam({ name: 'id' })
  changeHorario(@Param('id') id: string, @Body() request: ChangeHorarioRequest) {
    const command = request as unknown as ChangeHorarioCommand;
    command.id = id;
    return this.changeHorarioUseCase.execute(command);
  }

  @Patch(':id/locutores')
  @ApiParam({ name: 'id' })
  changeLocutores(@Param('id') id: string, @Body() request: ChangeLocutoresRequest) {
    const command = request as unknown as ChangeLocutoresCommand;
    command.id = id;
    return this.changeLocutoresUseCase.execute(command);
  }

  @Patch(':id/descripcion')
  @ApiParam({ name: 'id' })
  changeDescripcion(@Param('id') id: string, @Body() request: ChangeDescripcionRequest) {
    const command = request as unknown as ChangeDescripcionCommand;
    command.id = id;
    return this.changeDescripcionUseCase.execute(command);
  }

  @Patch(':id/patrocinador')
  @ApiParam({ name: 'id' })
  changePatrocinador(@Param('id') id: string, @Body() request: ChangePatrocinadorRequest) {
    const command = request as unknown as ChangePatrocinadorCommand;
    command.id = id;
    return this.changePatrocinadorUseCase.execute(command);
  }

  @Patch(':id/pais')
  @ApiParam({ name: 'id' })
  changePais(@Param('id') id: string, @Body() request: ChangePaisRequest) {
    const command = request as unknown as ChangePaisCommand;
    command.id = id;
    return this.changePaisUseCase.execute(command);
  }

  @Patch(':id/canal')
  @ApiParam({ name: 'id' })
  changeCanal(@Param('id') id: string, @Body() request: ChangeCanalRequest) {
    const command = request as unknown as ChangeCanalCommand;
    command.id = id;
    return this.changeCanalUseCase.execute(command);
  }

  @Patch(':id/estado')
  @ApiParam({ name: 'id' })
  changeEstado(@Param('id') id: string, @Body() request: ChangeEstadoRequest) {
    const command = request as unknown as ChangeEstadoCommand;
    command.id = id;
    return this.changeEstadoUseCase.execute(command);
  }

  @Patch(':id/genero')
  @ApiParam({ name: 'id' })
  changeGenero(@Param('id') id: string, @Body() request: ChangeGeneroRequest) {
    const command = request as unknown as ChangeGeneroCommand;
    command.id = id;
    return this.changeGeneroUseCase.execute(command);
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  delete(@Param('id') id: string) {
    const command = new DeleteEmisoraCommand();
    command.id = id;
    return this.deleteUseCase.execute(command);
  }
}
