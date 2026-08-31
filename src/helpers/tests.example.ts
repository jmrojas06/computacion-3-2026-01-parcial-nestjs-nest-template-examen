/**
 * AYUDAS PARCIAL - TESTS E2E (si te piden tests)
 * Copiar a test/app.e2e-spec.ts o crear test/processes.e2e-spec.ts
 */

// // import { Test, TestingModule } from '@nestjs/testing';
// // import { INestApplication, ValidationPipe } from '@nestjs/common';
// // import request from 'supertest';
// // import { AppModule } from '../src/app.module';
// // import { getConnectionToken } from '@nestjs/mongoose';
// //
// // describe('Processes & Executions (e2e)', () => {
// //   let app: INestApplication;
// //   beforeAll(async () => {
// //     const m: TestingModule = await Test.createTestingModule({ imports: [AppModule] }).compile();
// //     app = m.createNestApplication();
// //     app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));
// //     await app.init();
// //   });
// //   afterAll(async () => {
// //     const conn = app.get(getConnectionToken());
// //     await conn.db.dropDatabase();
// //     await app.close();
// //   });
// //
// //   it('/processes (POST) 201', async () => {
// //     const res = await request(app.getHttpServer())
// //       .post('/processes')
// //       .send({ name: 'Test', state: 'draft', targetTemperature: 30 })
// //       .expect(201);
// //     expect(res.body).toHaveProperty('_id');
// //     expect(res.body.createdAt).toBeDefined();
// //   });
// //   it('/processes (POST) 400 sin name', () => request(app.getHttpServer()).post('/processes').send({}).expect(400));
// //   it('/executions (POST) 404 processId inexistente', () =>
// //     request(app.getHttpServer())
// //       .post('/executions')
// //       .send({ processId: '000000000000000000000000', startDate: '2026-08-27T10:00:00.000Z', operatorUsername: 'op1' })
// //       .expect(404));
// // });
