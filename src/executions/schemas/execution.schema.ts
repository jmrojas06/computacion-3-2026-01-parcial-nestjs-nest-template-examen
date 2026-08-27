import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

import { Process } from '../../processes/schemas/process.schema';

export type ExecutionDocument = HydratedDocument<Execution>;

export enum ExecutionStatus {
    RUNNING = 'running',
    STOPPED = 'stopped',
}

@Schema({ timestamps: false })
export class Execution {
    @Prop({ type: Types.ObjectId, ref: Process.name, required: true })
    processId: Types.ObjectId;

    @Prop({ required: true })
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop({ required: true })
    operatorUsername: string;

    @Prop({ enum: ExecutionStatus, default: ExecutionStatus.RUNNING })
    status: ExecutionStatus;

    @Prop()
    notes: string;

    @Prop()
    measuredPH: number;

    @Prop()
    measuredTemperature: number;
}

export const ExecutionSchema = SchemaFactory.createForClass(Execution);
