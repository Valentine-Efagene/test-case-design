import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('tests for correctness', () => {
    it('should return 5', () => {
      expect(appController.fibonacci({ n: 5 }).data).toBe(5);
    });

    it('should return 2', () => {
      expect(appController.fibonacci({ n: 3 }).data).toBe(2);
    });
  });
});
