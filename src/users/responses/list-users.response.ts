import { ApiProperty } from '@nestjs/swagger';
import { UserResponse } from './user-response.response';

export class ListUsersResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty({ type: [UserResponse]})
  results: UserResponse[]
}
