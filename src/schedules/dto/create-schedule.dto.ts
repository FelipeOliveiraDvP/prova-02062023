import { IsNotEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScheduleDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string

    @ApiProperty()
    @IsNotEmpty()
    @Min(1)
    numberOfParticipants: number

    @ApiProperty()
    @IsNotEmpty()
    eventDate: Date

    @ApiProperty()
    @IsNotEmpty()
    eventDuration: number
}
