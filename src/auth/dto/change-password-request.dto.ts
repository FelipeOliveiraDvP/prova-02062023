import { ApiProperty } from '@nestjs/swagger';
import { MinLength, IsNotEmpty, IsString, Equals } from 'class-validator';

export class ChangePasswordRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty()
  @Equals('password')
  confirmPassword: string;
}
