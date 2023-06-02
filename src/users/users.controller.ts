import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto';
import { UsersService } from './users.service';

@ApiTags('Gestão de Usuários')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  @ApiBearerAuth()
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @ApiBearerAuth()
  create(@Body() user: CreateUserDto) {
    return this.usersService.findAll();
  }

  @Delete('/:id')
  @ApiBearerAuth()
  delete(@Param('id') id: number) {
    return this.usersService.delete(id)
  }
}
