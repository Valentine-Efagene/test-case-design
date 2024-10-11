import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return 5', () => {
    expect(service.getFibonacci(5)).toBe(5);
  });

  it('should return 2', () => {
    expect(service.getFibonacci(3)).toBe(2);
  });
});
