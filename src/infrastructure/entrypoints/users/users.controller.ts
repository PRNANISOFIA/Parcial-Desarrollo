import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Req,
  UseFilters,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import type { Request as ExpressRequest } from 'express';
import {
  IChangePasswordUseCase,
  ICreateUserUseCase,
  IDeleteUserUseCase,
  IGetUserByIdUseCase,
  IListUsersUseCase,
  ILoginUseCase,
  ILogoutUseCase,
  IRequestPasswordResetUseCase,
  IResetPasswordUseCase,
  IUpdateUserUseCase,
} from '../../../application/users/ports/in/user.use-cases';
import { ChangePasswordRequest } from './dto/change-password.request';
import { CreateUserRequest } from './dto/create-user.request';
import { LoginRequest } from './dto/login.request';
import { RequestPasswordResetRequest } from './dto/request-password-reset.request';
import { ResetPasswordRequest } from './dto/reset-password.request';
import { UpdateUserRequest } from './dto/update-user.request';
import { DomainExceptionFilter } from '../common/domain-exception.filter';
import { ListUsersQuery } from '../../../application/users/dto/query/list-users.query';
import { GetUserByIdQuery } from '../../../application/users/dto/query/get-user-by-id.query';
import { CreateUserCommand } from '../../../application/users/dto/command/create-user.command';
import { UpdateUserCommand } from '../../../application/users/dto/command/update-user.command';
import { DeleteUserCommand } from '../../../application/users/dto/command/delete-user.command';
import { LoginCommand } from '../../../application/users/dto/command/login.command';
import { ChangePasswordCommand } from '../../../application/users/dto/command/change-password.command';
import { RequestPasswordResetCommand } from '../../../application/users/dto/command/request-password-reset.command';
import { ResetPasswordCommand } from '../../../application/users/dto/command/reset-password.command';
import { UserResponse } from '../../../application/users/dto/response/user.response';
import { UserListResponse } from '../../../application/users/dto/response/user-list.response';
import { LoginResponse } from '../../../application/users/dto/response/login.response';
import { JwtAuthGuard } from '../../security/jwt-auth.guard';

@ApiTags('users')
@Controller('users')
@UseFilters(new DomainExceptionFilter())
export class UsersController {
  constructor(
    private readonly createUserUseCase: ICreateUserUseCase,
    private readonly updateUserUseCase: IUpdateUserUseCase,
    private readonly deleteUserUseCase: IDeleteUserUseCase,
    private readonly getUserByIdUseCase: IGetUserByIdUseCase,
    private readonly listUsersUseCase: IListUsersUseCase,
    private readonly loginUseCase: ILoginUseCase,
    private readonly logoutUseCase: ILogoutUseCase,
    private readonly changePasswordUseCase: IChangePasswordUseCase,
    private readonly requestPasswordResetUseCase: IRequestPasswordResetUseCase,
    private readonly resetPasswordUseCase: IResetPasswordUseCase,
  ) {}

  @Post()
  @ApiOperation({ summary: 'Crear usuario' })
  @ApiCreatedResponse({ type: UserResponse })
  create(@Body() request: CreateUserRequest) {
    const command = request as CreateUserCommand;
    return this.createUserUseCase.execute(command);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener usuario por id' })
  @ApiOkResponse({ type: UserResponse })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  getById(@Param('id') id: string) {
    const query = new GetUserByIdQuery();
    query.id = id;
    return this.getUserByIdUseCase.execute(query);
  }

  @Get()
  @ApiOperation({ summary: 'Listar usuarios' })
  @ApiOkResponse({ type: UserListResponse })
  @ApiQuery({ name: 'page', required: false, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, example: 10 })
  @ApiQuery({ name: 'searchTerm', required: false, example: 'john' })
  @ApiQuery({ name: 'isActive', required: false, example: true })
  @ApiQuery({ name: 'role', required: false, example: 'Admin' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  list(
    @Query('page') page = 1,
    @Query('pageSize') pageSize = 10,
    @Query('searchTerm') searchTerm?: string,
    @Query('isActive') isActive?: string,
    @Query('role') role?: string,
  ) {
    const query = new ListUsersQuery();
    query.page = Number(page) || 1;
    query.pageSize = Number(pageSize) || 10;
    query.searchTerm = searchTerm;
    query.role = role;
    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }
    return this.listUsersUseCase.execute(query);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Actualizar usuario' })
  @ApiOkResponse({ type: UserResponse })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() request: UpdateUserRequest) {
    const command = request as UpdateUserCommand;
    command.id = id;
    return this.updateUserUseCase.execute(command);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar usuario' })
  @ApiResponse({ status: 204, description: 'Usuario eliminado' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  delete(@Param('id') id: string) {
    const command = new DeleteUserCommand();
    command.id = id;
    return this.deleteUserUseCase.execute(command);
  }

  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiOkResponse({ type: LoginResponse })
  login(@Body() request: LoginRequest) {
    const command = request as LoginCommand;
    return this.loginUseCase.execute(command);
  }

  @Post('logout')
  @ApiOperation({ summary: 'Logout' })
  @ApiResponse({ status: 200, description: 'Sesion cerrada' })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async logout(@Req() req: ExpressRequest) {
    const authorization = req.headers['authorization'];
    if (Array.isArray(authorization)) {
      throw new UnauthorizedException('Authorization header with Bearer token is required');
    }
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedException('Authorization header with Bearer token is required');
    }
    const token = authorization.replace('Bearer', '').trim();
    await this.logoutUseCase.execute(token);
    return { message: 'Sesion cerrada' };
  }

  @Post(':id/change-password')
  @ApiOperation({ summary: 'Cambiar password' })
  @ApiResponse({ status: 200, description: 'Password cambiada' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async changePassword(@Param('id') id: string, @Body() request: ChangePasswordRequest) {
    const command = request as ChangePasswordCommand;
    command.id = id;
    await this.changePasswordUseCase.execute(command);
    return { message: 'Password cambiada' };
  }

  @Post('request-password-reset')
  @ApiOperation({ summary: 'Solicitar reset de password' })
  @ApiResponse({ status: 200, description: 'Solicitud recibida' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async requestPasswordReset(@Body() request: RequestPasswordResetRequest) {
    const command = request as RequestPasswordResetCommand;
    await this.requestPasswordResetUseCase.execute(command);
    return { message: 'Si el email existe se enviara un enlace' };
  }

  @Post('reset-password')
  @ApiOperation({ summary: 'Resetear password' })
  @ApiResponse({ status: 200, description: 'Password reseteada' })
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  async resetPassword(@Body() request: ResetPasswordRequest) {
    const command = request as ResetPasswordCommand;
    await this.resetPasswordUseCase.execute(command);
    return { message: 'Password reseteada' };
  }
}
