// AYUDAS PARCIAL: si te piden SQL comenta Mongoose y descomenta TypeORM (ver src/helpers/app-module-typeorm.example.ts)
// import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessesModule } from './processes/processes.module';
import { ExecutionsModule } from './executions/executions.module';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) => ({
                uri:
                    configService.get<string>('MONGO_URI') ??
                    'mongodb://root:root@localhost:27017/bioprocess?authSource=admin',
            }),
        }),
        ProcessesModule,
        ExecutionsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
