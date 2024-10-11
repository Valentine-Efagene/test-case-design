import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { FibonacciDto, StandardApiResponse } from './app.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/fibonacci/:n')
  fibonacci(
    @Param() dto: FibonacciDto
  ): StandardApiResponse<number> {
    const result = this.appService.getFibonacci(dto.n)
    return new StandardApiResponse(HttpStatus.OK, 'Successful', result)
  }
}
