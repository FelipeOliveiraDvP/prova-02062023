import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { SchedulesService } from './schedules.services';
import { CreateScheduleDto, UpdateScheduleDto } from './dto';
import { ListSchedulesResponse, ScheduleResponse } from './responses';

@ApiTags('Gestão de Eventos')
@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) { }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({
    type: ListSchedulesResponse
  })
  findAll(
    @Query('perPage') perPage?: number,
    @Query('page') page?: number,
    @Query('startDate') startDate?: Date,
    @Query('endDate') endDate?: Date) {
    return this.schedulesService.findAll(perPage, page, startDate, endDate);
  }

  @Get('/:id')
  @ApiBearerAuth()
  @ApiOkResponse({
    type: ScheduleResponse
  })
  detail(@Param('id') id: number) {
    return this.schedulesService.findOneById(id)
  }

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({
    type: ScheduleResponse
  })
  create(@Body() schedule: CreateScheduleDto) {
    return this.schedulesService.create(schedule)
  }

  @Put('/:id')
  @ApiBearerAuth()
  @ApiOkResponse({
    type: ScheduleResponse
  })
  update(@Body() schedule: UpdateScheduleDto, @Param('id') id: number) {
    return this.schedulesService.update(schedule)
  }

  @Delete('/:id')
  @ApiBearerAuth()
  delete(@Param('id') id: number) {
    return this.schedulesService.delete(id)
  }
}
