import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  ChangePasswordService,
  CreateUserService,
  DeleteUserService,
  GetUserByIdService,
  ListUsersService,
  LoginService,
  LogoutService,
  RequestPasswordResetService,
  ResetPasswordService,
  UpdateUserService,
} from '../application/users/services';
import {
  IChangePasswordUseCase,
  ICreateUserUseCase,
  IDeleteUserUseCase,
  IGetUserByIdUseCase,
  IListUsersUseCase,
  ILoginUseCase,
  ILogoutUseCase,
  IRequestPasswordResetUseCase,
  IResetPasswordUseCase,
  IUpdateUserUseCase,
} from '../application/users/ports/in/user.use-cases';
import {
  PasswordHasherPort,
  PasswordStrengthPolicyPort,
  TokenIssuerPort,
  UserRepository,
  UnitOfWorkPort,
} from '../application/users/ports/out/user.ports';
import { UsersController } from '../infrastructure/entrypoints/users/users.controller';
import { JwtTokenIssuerAdapter } from '../infrastructure/security/jwt-token-issuer.adapter';
import { BcryptPasswordHasherAdapter } from '../infrastructure/security/bcrypt-password-hasher.adapter';
import { PasswordStrengthPolicyAdapter } from '../infrastructure/security/password-strength-policy.adapter';
import { UserTypeOrmRepository } from '../infrastructure/persistence/typeorm/repositories/user-typeorm.repository';
import { UserOrmEntity } from '../infrastructure/persistence/typeorm/entities/user.orm-entity';
import { TypeOrmUnitOfWork } from '../infrastructure/persistence/typeorm/unit-of-work/typeorm-unit-of-work';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TokenBlacklistOrmEntity } from '../infrastructure/persistence/typeorm/entities/token-blacklist.orm-entity';
import { JwtAuthGuard } from '../infrastructure/security/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([UserOrmEntity, TokenBlacklistOrmEntity]),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const expirationHours = Number(config.get<string | number>('JWT_EXPIRATION_HOURS', 24));

        return {
          secret: config.get<string>(
            'JWT_SECRET',
            'MiClaveSecretaSuperSeguraParaJWT2024!@#',
          ),
          signOptions: {
            expiresIn: `${expirationHours}h`,
            issuer: config.get<string>('JWT_ISSUER', 'ArquitecturaHexagonalDDD'),
            audience: config.get<string>('JWT_AUDIENCE', 'ArquitecturaHexagonalDDD-Users'),
          },
        };
      },
    }),
  ],
  controllers: [UsersController],
  providers: [
    { provide: UserRepository, useClass: UserTypeOrmRepository },
    { provide: PasswordHasherPort, useClass: BcryptPasswordHasherAdapter },
    { provide: PasswordStrengthPolicyPort, useClass: PasswordStrengthPolicyAdapter },
    { provide: TokenIssuerPort, useClass: JwtTokenIssuerAdapter },
    { provide: UnitOfWorkPort, useClass: TypeOrmUnitOfWork },
    JwtAuthGuard,
    { provide: ICreateUserUseCase, useClass: CreateUserService },
    { provide: IUpdateUserUseCase, useClass: UpdateUserService },
    { provide: IDeleteUserUseCase, useClass: DeleteUserService },
    { provide: IGetUserByIdUseCase, useClass: GetUserByIdService },
    { provide: IListUsersUseCase, useClass: ListUsersService },
    { provide: ILoginUseCase, useClass: LoginService },
    { provide: ILogoutUseCase, useClass: LogoutService },
    { provide: IChangePasswordUseCase, useClass: ChangePasswordService },
    { provide: IRequestPasswordResetUseCase, useClass: RequestPasswordResetService },
    { provide: IResetPasswordUseCase, useClass: ResetPasswordService },
  ],
  exports: [UserRepository, TokenIssuerPort, JwtAuthGuard],
})
export class UsersModule {}
