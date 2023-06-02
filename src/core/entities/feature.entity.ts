import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Claim } from './claim.entity';

@Entity('features')
export class Feature {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @OneToMany(() => Claim, (claim) => claim.feature)
  claims: Claim[];
}
