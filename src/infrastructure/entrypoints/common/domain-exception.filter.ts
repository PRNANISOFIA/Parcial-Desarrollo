import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  EmailAlreadyExistsException,
  InvalidPasswordException,
  InvalidRoleException,
  InvalidUserNameException,
  UserAlreadyActiveException,
  UserAlreadyInactiveException,
  UserNotFoundException,
} from '../../../domain/users/exceptions';
import {
  EmisoraNotFoundException,
  NombreEmisoraDuplicadoException,
  ReglaConsistenciaException,
} from '../../../domain/emisoras/exceptions';

@Catch(Error)
export class DomainExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();

    const map = new Map<Function, { status: number; message: string }>([
      [UserNotFoundException, { status: HttpStatus.NOT_FOUND, message: exception.message }],
      [EmailAlreadyExistsException, { status: HttpStatus.CONFLICT, message: exception.message }],
      [InvalidPasswordException, { status: HttpStatus.BAD_REQUEST, message: exception.message }],
      [InvalidRoleException, { status: HttpStatus.BAD_REQUEST, message: exception.message }],
      [InvalidUserNameException, { status: HttpStatus.BAD_REQUEST, message: exception.message }],
      [UserAlreadyActiveException, { status: HttpStatus.BAD_REQUEST, message: exception.message }],
      [UserAlreadyInactiveException, { status: HttpStatus.BAD_REQUEST, message: exception.message }],
      [EmisoraNotFoundException, { status: HttpStatus.NOT_FOUND, message: exception.message }],
      [NombreEmisoraDuplicadoException, { status: HttpStatus.CONFLICT, message: exception.message }],
      [ReglaConsistenciaException, { status: HttpStatus.BAD_REQUEST, message: exception.message }],
    ]);

    const match = map.get((exception as any).constructor);
    if (match) {
      return response.status(match.status).json({ message: match.message });
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const payload = exception.getResponse();
      let message: unknown = exception.message;
      if (typeof payload === 'string') {
        message = payload;
      } else if (payload && typeof payload === 'object' && 'message' in payload) {
        message = (payload as any).message;
      }
      return response.status(status).json({ message });
    }

    return response
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: 'Error interno', details: exception.message });
  }
}
