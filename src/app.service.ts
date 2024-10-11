import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  /**
   * Computes the nth Fibonacci number
   * 
   * @param n 
   * @param memo 
   * @returns 
   */
  getFibonacci(n: number, memo: object = {}): number {
    if (n in memo) {
      return memo[n]
    }

    if (n <= 2) {
      return 1
    }

    memo[n] = this.getFibonacci(n - 1, memo) + this.getFibonacci(n - 2, memo)
    return memo[n]
  }
}
