import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
import { UserOrmEntity } from '../persistence/typeorm/entities/user.orm-entity';
import { TokenBlacklistOrmEntity } from '../persistence/typeorm/entities/token-blacklist.orm-entity';
import { EmisoraOrmEntity } from '../persistence/typeorm/entities/emisora.orm-entity';

const DEFAULT_DATABASE_URL =
  'postgresql://npena:npena123@144.22.48.194:5432/npena_software';

export const buildTypeOrmConfig = (
  config: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  url: config.get<string>('DATABASE_URL', DEFAULT_DATABASE_URL),
  entities: [UserOrmEntity, EmisoraOrmEntity, TokenBlacklistOrmEntity],
  synchronize: false, // respetar esquema existente
  migrations: [
    join(__dirname, '..', 'persistence', 'typeorm', 'migrations', '*.{ts,js}'),
  ],
  migrationsRun: true, // ejecuta migraciones pendientes en el arranque
  logging: config.get<string>('TYPEORM_LOGGING', 'false') === 'true',
});
