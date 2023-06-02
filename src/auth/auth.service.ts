import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginRequestDto } from './dto/login-request.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // TODO: hash compare user password
  async login({ email, password }: LoginRequestDto): Promise<any> {
    // const user = await this.usersService.findOne(email);
    // if (user?.password !== password) {
    //   throw new UnauthorizedException();
    // }
    // const { id, name } = user;
    // const payload = { sub: id, name };
    // return {
    //   token: await this.jwtService.signAsync(payload, {
    //     secret: this.configService.get<string>('jwtSecret'),
    //   }),
    // };
  }
}
