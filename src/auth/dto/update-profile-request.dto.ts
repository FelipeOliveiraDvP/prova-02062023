import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  avatar?: string;

  @ApiProperty({
    required: false,
  })
  @IsString()
  phone?: string;
}
