import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { buildTypeOrmConfig } from './infrastructure/config/typeorm.config';
import { UsersModule } from './modules/users.module';
import { EmisorasModule } from './modules/emisoras.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: buildTypeOrmConfig,
    }),
    UsersModule,
    EmisorasModule,
  ],
})
export class AppModule {}
