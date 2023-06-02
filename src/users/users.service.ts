import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities';
import { CreateUserDto, UpdateUserDto } from './dto';

@Injectable()
export class UsersService {
  async findAll(): Promise<User[]> {
    return [];
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return null;
  }

  async findOneById(userId: string): Promise<User | null> {
    return null;
  }

  async create(user: CreateUserDto): Promise<User | null> {
    return null;
  }

  async update(user: UpdateUserDto): Promise<User | null> {
    return null;
  }

  async delete(userId: number): Promise<null> {
    return null;
  }
}
