import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { TokenIssuerPort } from '../../application/users/ports/out/user.ports';
import { Role } from '../../domain/users/value-objects/role.vo';
import { UserId } from '../../domain/users/value-objects/user-id.vo';
import { UserName } from '../../domain/users/value-objects/user-name.vo';
import { TokenBlacklistOrmEntity } from '../persistence/typeorm/entities/token-blacklist.orm-entity';

@Injectable()
export class JwtTokenIssuerAdapter implements TokenIssuerPort {
  private readonly expirationSeconds: number;

  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(TokenBlacklistOrmEntity)
    private readonly tokenBlacklistRepo: Repository<TokenBlacklistOrmEntity>,
  ) {
    const hours = Number(process.env.JWT_EXPIRATION_HOURS ?? 24);
    this.expirationSeconds = hours * 60 * 60;
  }

  generateToken(userId: UserId, userName: UserName, role: Role): string {
    return this.jwtService.sign({
      sub: userId.value,
      userName: userName.value,
      role: role.value,
    });
  }

  expiresInSeconds(): number {
    return this.expirationSeconds;
  }

  async validate(token: string): Promise<boolean> {
    const blacklisted = await this.tokenBlacklistRepo.findOne({ where: { token } });
    if (blacklisted && blacklisted.expirationTime > new Date()) {
      return false;
    }
    try {
      this.jwtService.verify(token);
      return true;
    } catch {
      return false;
    }
  }

  async revoke(token: string): Promise<void> {
    let expirationTime = new Date(Date.now() + this.expirationSeconds * 1000);
    const decoded = this.jwtService.decode(token) as { exp?: number } | null;
    if (decoded?.exp) {
      expirationTime = new Date(decoded.exp * 1000);
    }
    await this.tokenBlacklistRepo.save({ token, expirationTime });
  }
}
