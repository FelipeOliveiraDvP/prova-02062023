import { ApiProperty } from '@nestjs/swagger';

export class AccessTokenResponse {
  @ApiProperty()
  token: string;
}
