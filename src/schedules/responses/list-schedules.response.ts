import { ApiProperty } from '@nestjs/swagger';
import { ScheduleResponse } from './schedule-response.response';

export class ListSchedulesResponse {
  @ApiProperty()
  total: number;

  @ApiProperty()
  page: number;

  @ApiProperty({ type: [ScheduleResponse]})
  results: ScheduleResponse[]
}
