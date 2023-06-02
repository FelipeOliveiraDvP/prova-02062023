import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/core/entities';
import { UsersService } from 'src/users/users.service';
import { LoginRequestDto } from './dto/login-request.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async login({ email, password }: LoginRequestDto): Promise<any> {
    // Example user
    const user = {
      id: 1,
      name: 'Administrador',
      email: 'admin@email',
      password: 'asdf1234'
    };

    // Example validation
    if (user.email !== email || user?.password !== password) {
      throw new UnauthorizedException();
    }

    const { id, name } = user;
    const payload = { sub: id, name };

    return {
      token: await this.jwtService.signAsync(payload, {
        secret: this.configService.get<string>('jwtSecret'),
      }),
    };
  }
}
