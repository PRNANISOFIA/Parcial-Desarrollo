"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildTypeOrmConfig = void 0;
const path_1 = require("path");
const user_orm_entity_1 = require("../persistence/typeorm/entities/user.orm-entity");
const token_blacklist_orm_entity_1 = require("../persistence/typeorm/entities/token-blacklist.orm-entity");
const emisora_orm_entity_1 = require("../persistence/typeorm/entities/emisora.orm-entity");
const DEFAULT_DATABASE_URL = 'postgresql://npena:npena123@144.22.48.194:5432/npena_software';
const buildTypeOrmConfig = (config) => ({
    type: 'postgres',
    url: config.get('DATABASE_URL', DEFAULT_DATABASE_URL),
    entities: [user_orm_entity_1.UserOrmEntity, emisora_orm_entity_1.EmisoraOrmEntity, token_blacklist_orm_entity_1.TokenBlacklistOrmEntity],
    synchronize: false,
    migrations: [
        (0, path_1.join)(__dirname, '..', 'persistence', 'typeorm', 'migrations', '*.{ts,js}'),
    ],
    migrationsRun: true,
    logging: config.get('TYPEORM_LOGGING', 'false') === 'true',
});
exports.buildTypeOrmConfig = buildTypeOrmConfig;
//# sourceMappingURL=typeorm.config.js.map