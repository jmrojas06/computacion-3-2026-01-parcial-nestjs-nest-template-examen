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
