import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SendEmailRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
