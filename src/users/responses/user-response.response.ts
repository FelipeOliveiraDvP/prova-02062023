import { ApiProperty } from "@nestjs/swagger";

export class UserResponse {
    @ApiProperty()
    id: number

    @ApiProperty()
    name: string

    @ApiProperty()
    email: string

    @ApiProperty()
    createdAt: Date

    @ApiProperty()
    updatedAt: Date
}
