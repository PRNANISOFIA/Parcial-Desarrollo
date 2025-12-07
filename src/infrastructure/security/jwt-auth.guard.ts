import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Request } from 'express';
import { TokenIssuerPort } from '../../application/users/ports/out/user.ports';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private readonly tokenIssuer: TokenIssuerPort) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest<Request>();
    const authorization = req.headers['authorization'];

    if (!authorization || Array.isArray(authorization) || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedException('Authorization header with Bearer token is required');
    }

    const token = authorization.replace('Bearer', '').trim();
    const isValid = await this.tokenIssuer.validate(token);

    if (!isValid) {
      throw new UnauthorizedException('Token invalido o revocado');
    }

    return true;
  }
}
