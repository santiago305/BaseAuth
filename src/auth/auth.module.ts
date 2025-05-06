// auth/auth.module.ts

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtStrategy } from './strategy/jwt.strategy';
import { envs } from '../config/envs';
import { JwtRefreshStrategy } from './strategy/jwt-refresh.strategy';

/**
 * Módulo de autenticación.
 *
 * Encapsula toda la lógica relacionada con login, generación de JWT,
 * validación de usuarios y estrategias de Passport (access y refresh tokens).
 */
@Module({
  imports: [
    // Módulo de usuarios para obtener/verificar usuarios desde el servicio
    UsersModule,

    // Passport para integración con estrategias JWT
    PassportModule,

    // Módulo JWT configurado con datos del entorno
    JwtModule.register({
      secret: envs.jwt.secret,
      signOptions: {
        expiresIn: envs.jwt.expiresIn,
        issuer: envs.jwt.issuer,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy,          // Estrategia para validar access tokens
    JwtRefreshStrategy,   // Estrategia para validar refresh tokens
  ],
})
export class AuthModule {}
