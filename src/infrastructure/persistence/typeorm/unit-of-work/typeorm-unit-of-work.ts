import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UnitOfWorkPort } from '../../../../application/users/ports/out/user.ports';

@Injectable()
export class TypeOrmUnitOfWork implements UnitOfWorkPort {
  constructor(private readonly dataSource: DataSource) {}

  async execute<T>(work: () => Promise<T>): Promise<T> {
    return this.dataSource.manager.transaction(async () => work());
  }
}
