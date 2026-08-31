/**
 * AYUDAS PARCIAL - ALTERNATIVA TYPEORM (si te piden Postgres/SQL en vez de Mongo)
 * Este archivo es solo de referencia, NO se importa. Si te piden SQL:
 * 1. Copia el bloque a src/processes/entities/process.entity.ts
 * 2. Cambia MongooseModule por TypeOrmModule en processes.module.ts (ver app-module-typeorm.example.ts)
 * 3. Cambia docker-compose.yml al bloque postgres comentado
 */

// import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

// export enum ProcessState { DRAFT='draft', ACTIVE='active', ARCHIVED='archived' }
// @Entity('processes')
// export class Process {
//   @PrimaryGeneratedColumn('uuid') id: string;
//   @Column() name: string;
//   @Column({ nullable: true }) description: string;
//   @Column({ type: 'enum', enum: ProcessState, default: ProcessState.DRAFT }) state: ProcessState;
//   @Column({ type: 'float', nullable: true }) targetTemperature: number;
//   @Column({ type: 'float', nullable: true }) targetPH: number;
//   @Column({ type: 'float', nullable: true }) maxDurationHours: number;
//   @CreateDateColumn() createdAt: Date;
//   // @OneToMany(() => Execution, e => e.process) executions: Execution[];
// }

// export enum ExecutionStatus { RUNNING='running', STOPPED='stopped' }
// @Entity('executions')
// export class Execution {
//   @PrimaryGeneratedColumn('uuid') id: string;
//   @Column({ type: 'uuid' }) processId: string;
//   @ManyToOne(() => Process, { onDelete: 'CASCADE' }) @JoinColumn({ name: 'processId' }) process: Process;
//   @Column({ type: 'timestamp' }) startDate: Date;
//   @Column({ type: 'timestamp', nullable: true }) endDate: Date;
//   @Column() operatorUsername: string;
//   @Column({ type: 'enum', enum: ExecutionStatus, default: ExecutionStatus.RUNNING }) status: ExecutionStatus;
//   @Column({ nullable: true }) notes: string;
//   @Column({ type: 'float', nullable: true }) measuredPH: number;
//   @Column({ type: 'float', nullable: true }) measuredTemperature: number;
// }

// // Service TypeORM snippet:
// // @Injectable()
// // export class ProcessesService {
// //   constructor(@InjectRepository(Process) private repo: Repository<Process>) {}
// //   create(dto) { return this.repo.save(this.repo.create(dto)); }
// //   findAll() { return this.repo.find(); }
// //   findOne(id) { return this.repo.findOneBy({ id }); } // + NotFoundCheck
// //   update(id, dto) { await this.repo.update(id, dto); return this.findOne(id); }
// //   remove(id) { await this.repo.delete(id); }
// // }

// // Execution findByProcessId TypeORM:
// // async findByProcessId(processId: string) {
// //   const proc = await this.processRepo.findOneBy({ id: processId });
// //   if (!proc) throw new NotFoundException(`Process ${processId} not found`);
// //   return this.executionRepo.find({ where: { processId } });
// // }
