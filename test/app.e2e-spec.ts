import 'dotenv/config';

import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        AppModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();

    // Enable ValidationPipe globally for testing
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
      }),
    );

    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('Get a Fibonacci number too high', () => {
    return request(app.getHttpServer())
      .get('/fibonacci/13')
      .expect(HttpStatus.BAD_REQUEST)
      .expect(res => {
        expect(res.body.message).toContain('n must not be greater than 10');
      });
  });

  it('Get the 5th Fibonacci number', () => {
    return request(app.getHttpServer())
      .get('/fibonacci/5')
      .expect(HttpStatus.OK)
      .expect(res => {
        expect(res.body.data).toBe(5);
      });
  });
})
