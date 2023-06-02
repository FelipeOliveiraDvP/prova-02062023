import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BeforeInsert,
  OneToMany,
} from 'typeorm';
import * as brcrypt from 'bcrypt';
import { Timestamps } from './commons/timestamps';
import { Schedule } from './schedule.entity';

@Entity('users')
export class User extends Timestamps {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @OneToMany(() => Schedule, (schedule) => schedule.user)
  schedules: Schedule[]

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await brcrypt.genSalt();
    this.password = await brcrypt.hash(password || this.password, salt);
  }
}
