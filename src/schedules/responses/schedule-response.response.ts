import { ApiProperty } from "@nestjs/swagger";

export class ScheduleResponse {
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    numberOfParticipants: number

    @ApiProperty()
    eventDuration: number

    @ApiProperty()
    eventDate: Date

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date
}
