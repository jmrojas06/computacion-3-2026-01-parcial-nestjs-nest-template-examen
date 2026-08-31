/**
 * AYUDAS PARCIAL - APP.MODULE ALTERNATIVO PARA TYPEORM (si te piden SQL)
 * Descomenta este bloque y comenta el Mongoose si te piden Postgres
 */

// // import { Module } from '@nestjs/common';
// // import { ConfigModule, ConfigService } from '@nestjs/config';
// // import { TypeOrmModule } from '@nestjs/typeorm';
// // import { Process } from './processes/entities/process.entity';
// // import { Execution } from './executions/entities/execution.entity';
// // import { ProcessesModule } from './processes/processes.module';
// // import { ExecutionsModule } from './executions/executions.module';
// // @Module({
// //   imports: [
// //     ConfigModule.forRoot({ isGlobal: true }),
// //     TypeOrmModule.forRootAsync({
// //       imports: [ConfigModule],
// //       inject: [ConfigService],
// //       useFactory: (cs: ConfigService) => ({
// //         type: 'postgres',
// //         host: cs.get('DB_HOST') ?? 'localhost',
// //         port: cs.get<number>('DB_PORT') ?? 5433,
// //         username: cs.get('DB_USERNAME') ?? 'postgres',
// //         password: cs.get('DB_PASSWORD') ?? 'postgres',
// //         database: cs.get('DB_DATABASE') ?? 'mydatabase',
// //         entities: [Process, Execution],
// //         synchronize: true, // solo para parcial, en prod false
// //       }),
// //     }),
// //     ProcessesModule,
// //     ExecutionsModule,
// //   ],
// // })
// // export class AppModule {}

// /**
//  * DOCKER-COMPOSE postgres comentado (copiar a docker-compose.yml si te piden SQL):
//  *
// services:
//   db:
//     image: postgres:16
//     container_name: postgres-db-1
//     environment:
//       POSTGRES_USER: ${DB_USERNAME}
//       POSTGRES_PASSWORD: ${DB_PASSWORD}
//       POSTGRES_DB: ${DB_DATABASE}
//     ports: ["${DB_PORT}:5432"]
//     volumes: [postgres_data:/var/lib/postgresql/data]
// volumes:
//   postgres_data:
//  */

// /**
//  * .env para postgres:
//  * DB_HOST=localhost
//  * DB_PORT=5433
//  * DB_USERNAME=postgres
//  * DB_PASSWORD=postgres
//  * DB_DATABASE=mydatabase
//  * DB_TYPE=postgres
//  */
