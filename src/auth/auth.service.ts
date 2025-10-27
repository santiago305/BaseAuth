import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';
import { UsersService } from '../users/users.service';
import { LoginAuthDto } from './dto';
import { envs } from 'src/config/envs';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { RoleType } from 'src/common/constants';
import { ErrorResponse } from 'src/common/interfaces/response.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  // ✅ Valida credenciales del usuario
  private async validateUser(email: string, password: string) {
    const user = await this.usersService.findWithPasswordByEmail(email);

    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    const isPasswordValid = await argon2.verify(user.password, password);
    if (!isPasswordValid) throw new UnauthorizedException('Credenciales inválidas');

    return user;
  }

  // ✅ Inicia sesión y genera tokens con payload completo
  async login(dto: LoginAuthDto): Promise<{ access_token: string; refresh_token: string }> {
    const user = await this.validateUser(dto.email, dto.password);

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role?.description || RoleType.USER,
    };

    const access_token = this.jwtService.sign(payload, {
      expiresIn: envs.jwt.expiresIn,
      issuer: envs.jwt.issuer,
    });

    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: envs.jwt.refreshExpiresIn,
      issuer: envs.jwt.issuer,
    });

    console.log('🟢 Payload generado:', payload);

    return { access_token, refresh_token };
  }

  // ✅ Registra y devuelve tokens del nuevo usuario
  async register(dto: CreateUserDto): Promise<{ access_token: string; refresh_token: string }> {
    // Crea el usuario con rol por defecto USER
    const result = await this.usersService.create(dto, RoleType.USER);

    // 👇 Busca el usuario recién creado para armar el payload correcto
    const user = await this.usersService.findWithPasswordByEmail(dto.email);
    if (!user) throw new UnauthorizedException('Error al registrar usuario');

    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role?.description || RoleType.USER,
    };

    const access_token = this.jwtService.sign(payload, {
      expiresIn: envs.jwt.expiresIn,
      issuer: envs.jwt.issuer,
    });

    const refresh_token = this.jwtService.sign(payload, {
      expiresIn: envs.jwt.refreshExpiresIn,
      issuer: envs.jwt.issuer,
    });

    return { access_token, refresh_token };
  }

  // ✅ Refresca el access token usando el refresh token actual
  async refreshFromPayload(user: { sub: string; email: string; role: string }) {
    if (!user?.sub) {
      throw new UnauthorizedException('Token inválido');
    }

    const payload = {
      sub: user.sub,
      email: user.email,
      role: user.role,
    };

    const access_token = this.jwtService.sign(payload, {
      expiresIn: envs.jwt.expiresIn,
      issuer: envs.jwt.issuer,
    });

    return { access_token };
  }
}
