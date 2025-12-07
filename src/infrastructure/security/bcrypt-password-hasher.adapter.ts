import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PasswordHasherPort } from '../../application/users/ports/out/user.ports';

@Injectable()
export class BcryptPasswordHasherAdapter implements PasswordHasherPort {
  private readonly rounds = 10;

  async hash(password: string): Promise<string> {
    return bcrypt.hash(password, this.rounds);
  }

  async verify(password: string, hash: string): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }
}

