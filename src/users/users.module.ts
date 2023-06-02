import { Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from 'src/core/providers/database';

@Module({
  providers: [UsersService, DatabaseModule],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
