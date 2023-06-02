import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto';
import { ListUsersResponse, UserResponse } from './responses';
import { UsersService } from './users.service';

@ApiTags('Gestão de Usuários')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  @Get()
  @ApiBearerAuth()
  @ApiOkResponse({
    type: ListUsersResponse
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Post()
  @ApiBearerAuth()
  @ApiOkResponse({
    type: UserResponse
  })
  create(@Body() user: CreateUserDto) {
    return this.usersService.findAll();
  }

  @Delete('/:id')
  @ApiBearerAuth()
  delete(@Param('id') id: number) {
    return this.usersService.delete(id)
  }
}
