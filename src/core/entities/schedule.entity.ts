import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Timestamps } from "./commons/timestamps";
import { User } from "./user.entity";

@Entity('schedules')
export class Schedule extends Timestamps {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 100 })
    name: string

    @Column({ type: 'integer', length: 11})
    numberOfParticipants: number

    @Column({ type: 'timestamp' })
    eventDate: Date

    @Column({ type: 'integer', length: 11})
    eventDuration: number

    @ManyToOne(() => User, (user) => user.schedules)
    user: User
}
