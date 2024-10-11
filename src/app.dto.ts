import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsInt, IsPositive, Max } from 'class-validator'

export class FibonacciDto {
    @ApiProperty({
        type: 'number',
        example: 4
    })
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    @IsPositive()
    @IsInt()
    @Max(10)
    n: number
}

@ApiExtraModels(StandardApiResponse)
export class StandardApiResponse<T = any> {
    statusCode: number;
    message: string;
    data?: T;

    constructor(statusCode: number, message: string, data?: T) {
        this.message = message;
        this.statusCode = statusCode;
        this.data = data;
    }
}