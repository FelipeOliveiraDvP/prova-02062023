import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/core/decorators';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { SchedulesService } from './schedules.services';

@ApiTags('Eventos')
@Controller('schedules')
export class SchedulesController {
  constructor(private schedulesService: SchedulesService) {}

  @Get()
  findAll(@Query('startDate') startDate: Date, @Query('endDate') endDate: Date) {
    return this.schedulesService.findAll(startDate, endDate);
  }

  @Get('/:id')
  detail(@Param('id') id: number) {
    return this.schedulesService.findOneById(id)
  }

  @Post()
  create(@Body() schedule: CreateScheduleDto) {
    return this.schedulesService.create(schedule)
  }

  @Put('/:id')
  update(@Body() schedule: UpdateScheduleDto, @Param('id') id: number) {
    return this.schedulesService.update(schedule)
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.schedulesService.delete(id)
  }
}
