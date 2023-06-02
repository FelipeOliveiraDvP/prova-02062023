import { Injectable } from '@nestjs/common';
import { Schedule } from 'src/core/entities';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Injectable()
export class SchedulesService {
  async findAll(perPage: number, page: number, startDate?: Date, endDate?: Date): Promise<Schedule[]> {
    return [];
  }

  async findOneById(scheduleId: number): Promise<Schedule | null> {
    return null;
  }

  async create(obj: CreateScheduleDto): Promise<Schedule | null> {
    return null;
  }

  async update(obj: UpdateScheduleDto): Promise<Schedule | null> {
    return null;
  }

  async delete(scheduleId: number): Promise<null> {
    return null;
  }
}
