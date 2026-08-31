import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    // AYUDAS: si te piden CORS/prefix/helmet ver src/helpers/cors-prefix.example.ts
    // app.enableCors({ origin: '*', credentials: true });
    // app.setGlobalPrefix('api');
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            transformOptions: { enableImplicitConversion: true },
        }),
    );
    // AYUDA: si te piden filtro global -> app.useGlobalFilters(new AllExceptionsFilter());
    // ver src/helpers/error-filter.example.ts
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
