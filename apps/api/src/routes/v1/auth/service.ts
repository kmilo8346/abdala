import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Credentials, IJwtPayload, IJwtToken, User } from '@abdala/models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UsersService } from '../users/service';
import { ConfigService } from '@nestjs/config';

const JWT_EXPIRATION_HOURS = 24 * 7;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly configService: ConfigService
  ) {}

  async validateUser(credential: Credentials): Promise<User> {
    // Obtener el usuario por username
    const response = await this.usersService.getAll({
      filter: {
        username: credential.username,
      },
      size: 1,
    });
    if (response.total === 0) {
      throw new HttpException(
        'User or password are invalid',
        HttpStatus.BAD_REQUEST
      );
    }

    // Validar si las credenciales son correctas
    const user = response.data[0];
    const isPasswordValid = await bcrypt.compare(
      credential.password,
      user.password
    );
    if (!isPasswordValid) {
      throw new HttpException(
        'User or password are invalid',
        HttpStatus.BAD_REQUEST
      );
    }

    return user;
  }

  async login(credentials: Credentials): Promise<IJwtToken> {
    const { _id, username } = await this.validateUser(credentials);

    const now = Math.floor(Date.now() / 1000);
    const expiration = now + JWT_EXPIRATION_HOURS * 60 * 60;

    // Generar el token JWT
    const payload: IJwtPayload = {
      sub: _id,
      username: username,
      iat: now,
      exp: expiration,
    };
    const token = jwt.sign(payload, this.configService.get('JWT_SECRET'));

    return {
      access_token: token,
      token_type: 'Bearer',
    };
  }
}
