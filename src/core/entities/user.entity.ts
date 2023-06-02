import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import * as brcrypt from 'bcrypt';
import { Role } from './role.entity';
import { Token } from './token.entity';
import { Timestamps } from './commons/timestamps';

@Entity('users')
export class User extends Timestamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  avatar: string;

  @Column({ type: 'boolean', default: false })
  active: boolean;

  @Column({ type: 'datetime', nullable: true })
  verifiedAt: Date;

  @OneToOne(() => Role)
  @JoinColumn()
  role: Role;

  @OneToMany(() => Token, (token) => token.user)
  tokens: Token[];

  @BeforeInsert()
  async setPassword(password: string) {
    const salt = await brcrypt.genSalt();
    this.password = await brcrypt.hash(password || this.password, salt);
  }
}
