import {
  Column,
  Entity,
  ManyToOne,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Feature } from './feature.entity';
import { Role } from './role.entity';

@Entity('claims')
export class Claim {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  value: string;

  @ManyToOne(() => Feature, (feature) => feature.claims)
  feature: Feature;

  @ManyToMany(() => Role, (role) => role.claims)
  roles: Role[];
}
