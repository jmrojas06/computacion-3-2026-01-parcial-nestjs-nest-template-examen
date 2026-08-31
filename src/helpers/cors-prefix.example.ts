/**
 * AYUDAS PARCIAL - CORS, PREFIX, HELMET (si te piden)
 */

// // En main.ts:
// // app.enableCors({ origin: '*', credentials: true });
// // app.setGlobalPrefix('api'); // todas las rutas quedan /api/processes
// // app.useGlobalPipes(new ValidationPipe({ whitelist:true, forbidNonWhitelisted:true, transform:true }));

// // Si te piden helmet:
// // npm i helmet
// // import helmet from 'helmet';
// // app.use(helmet());

// // Si te piden rate limiting:
// // npm i @nestjs/throttler
// // import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
// // @Module({ imports: [ThrottlerModule.forRoot({ throttlers: [{ ttl: 60000, limit: 10 }] })] })
// // @UseGuards(ThrottlerGuard)

// // Si te piden logger:
// // import { Logger } from '@nestjs/common';
// // const logger = new Logger('Bootstrap');
// // logger.log(`App running on ${await app.getUrl()}`);
