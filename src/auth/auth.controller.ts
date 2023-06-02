import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
  Param,
} from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import {
  ChangePasswordRequestDto,
  LoginRequestDto,
  RegisterRequestDto,
  SendEmailRequestDto,
  UpdateProfileRequestDto,
} from './dto';
import { AccessTokenResponse } from './responses';
import { Public } from 'src/core/decorators';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @Public()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    type: AccessTokenResponse,
  })
  login(@Body() loginRequestDto: LoginRequestDto) {
    return this.authService.login(loginRequestDto);
  }

  @Post('register')
  @Public()
  register(@Body() registerRequestDto: RegisterRequestDto) {
    return 'Registra um novo usuário e envia o e-mail de verificação';
  }

  @Post('forgot')
  @Public()
  @HttpCode(HttpStatus.OK)
  forgot(@Body() sendEmailRequestDto: SendEmailRequestDto) {
    return 'Enviar e-mail de recuperação de senha';
  }

  @Post('forgot/:token')
  @Public()
  @HttpCode(HttpStatus.OK)
  recovery(
    @Param('token') token: string,
    @Body() changePasswordRequestDto: ChangePasswordRequestDto,
  ) {
    return 'Valida o token, e altera a senha do usuário';
  }

  @Post('verify')
  @HttpCode(HttpStatus.OK)
  @Public()
  sendVerify(@Body() sendEmailRequestDto: SendEmailRequestDto) {
    return 'Envia um e-mail de verificação para um usuário inativo e não verificado.';
  }

  @Get('verify/:token')
  @ApiBearerAuth()
  verifyAccount(@Param('token') token: string) {
    return 'Verifica a conta, ativa o usuário e registra a data de verificação';
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth()
  refresh() {
    return 'Retorna um novo token de acesso para o usuário';
  }

  @Get('profile')
  @ApiBearerAuth()
  getProfile() {
    return 'Retorna o perfil do usuário';
  }

  @Put('profile')
  @ApiBearerAuth()
  updateProfile(@Body() updateProfileRequestDto: UpdateProfileRequestDto) {
    return 'Atualiza algumas informações do perfil';
  }

  @Put('password')
  @ApiBearerAuth()
  changePassword(@Body() changePasswordRequestDto: ChangePasswordRequestDto) {
    return 'Atualiza a senha do usuário';
  }

  @Get('logout')
  @ApiBearerAuth()
  logout() {
    return 'Cancelar o token e sair da conta';
  }
}
