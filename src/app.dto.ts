import { ApiExtraModels, ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsInt, Max, Min } from 'class-validator'

export class FibonacciDto {
    @ApiProperty({
        type: 'number',
        example: 4
    })
    @Transform(({ value }) => parseInt(value, 10), { toClassOnly: true })
    @IsInt()
    @Max(10)
    @Min(0)
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