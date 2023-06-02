import { Injectable } from '@nestjs/common';
import { User } from 'src/core/entities';

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

  async create(): Promise<User | null> {
    return null;
  }

  async update(): Promise<User | null> {
    return null;
  }

  async delete(): Promise<null> {
    return null;
  }
}
