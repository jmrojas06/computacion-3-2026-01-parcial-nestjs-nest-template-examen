import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProcessDocument = HydratedDocument<Process>;

export enum ProcessState {
    DRAFT = 'draft',
    ACTIVE = 'active',
    ARCHIVED = 'archived',
}

@Schema({ timestamps: { createdAt: true, updatedAt: false } })
export class Process {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ enum: ProcessState })
    state: ProcessState;

    @Prop()
    targetTemperature: number;

    @Prop()
    targetPH: number;

    @Prop()
    maxDurationHours: number;

    createdAt: Date;
}

export const ProcessSchema = SchemaFactory.createForClass(Process);

// AYUDAS PARCIAL (ver src/helpers/):
// - Si te piden validación de rangos: @Prop() targetPH -> añadir @Min/@Max en DTO (ver extra-validations.example.ts)
// - Si te piden TypeORM/SQL: ver typeorm-process.entity.example.ts
// - Si te piden softDelete: descomentar @Prop({default:false}) isDeleted en helpers
// - Si te piden índice único: @Prop({unique:true}) name
