import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Timestamps } from './commons/timestamps';
import { Claim } from './claim.entity';

@Entity('roles')
export class Role extends Timestamps {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @ManyToMany(() => Claim, (claim) => claim.roles, {
    cascade: true,
  })
  @JoinTable({ name: 'roleClaims' })
  claims: Claim[];
}
