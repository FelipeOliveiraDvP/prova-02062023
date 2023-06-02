import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

import { SchedulesService } from './schedules.services';
import { CreateScheduleDto, UpdateScheduleDto } from './dto';

@ApiTags('Gestão de Eventos')
@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) {}

  @Get()
  @ApiBearerAuth()
  findAll(@Query('startDate') startDate?: Date, @Query('endDate') endDate?: Date) {
    return this.schedulesService.findAll(startDate, endDate);
  }

  @Get('/:id')
  @ApiBearerAuth()
  detail(@Param('id') id: number) {
    return this.schedulesService.findOneById(id)
  }

  @Post()
  @ApiBearerAuth()
  create(@Body() schedule: CreateScheduleDto) {
    return this.schedulesService.create(schedule)
  }

  @Put('/:id')
  @ApiBearerAuth()
  update(@Body() schedule: UpdateScheduleDto, @Param('id') id: number) {
    return this.schedulesService.update(schedule)
  }

  @Delete('/:id')
  @ApiBearerAuth()
  delete(@Param('id') id: number) {
    return this.schedulesService.delete(id)
  }
}
