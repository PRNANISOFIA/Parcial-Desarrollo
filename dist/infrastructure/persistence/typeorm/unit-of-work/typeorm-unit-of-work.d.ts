import { DataSource } from 'typeorm';
import { UnitOfWorkPort } from '../../../../application/users/ports/out/user.ports';
export declare class TypeOrmUnitOfWork implements UnitOfWorkPort {
    private readonly dataSource;
    constructor(dataSource: DataSource);
    execute<T>(work: () => Promise<T>): Promise<T>;
}
