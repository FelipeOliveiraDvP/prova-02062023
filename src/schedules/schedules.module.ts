import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/core/providers/database';
import { SchedulesController } from './schedules.controller';
import { SchedulesService } from './schedules.services';

@Module({
  providers: [SchedulesService, DatabaseModule],
  controllers: [SchedulesController],
  exports: [SchedulesService],
})
export class SchedulesModule {}
