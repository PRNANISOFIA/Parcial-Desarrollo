import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ILogoutUseCase } from '../ports/in/user.use-cases';
import { TokenIssuerPort } from '../ports/out/user.ports';

@Injectable()
export class LogoutService implements ILogoutUseCase {
  constructor(private readonly tokenIssuer: TokenIssuerPort) {}

  async execute(token: string): Promise<void> {
    const isValid = await this.tokenIssuer.validate(token);
    if (!isValid) {
      throw new UnauthorizedException('Token invalido');
    }
    await this.tokenIssuer.revoke(token);
  }
}
