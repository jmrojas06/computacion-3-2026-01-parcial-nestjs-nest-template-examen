import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { Process, ProcessDocument } from '../processes/schemas/process.schema';

import { Execution, ExecutionDocument } from './schemas/execution.schema';
import { CreateExecutionDto } from './dto/create-execution.dto';
import { UpdateExecutionDto } from './dto/update-execution.dto';

@Injectable()
export class ExecutionsService {
    constructor(
        @InjectModel(Execution.name) private executionModel: Model<ExecutionDocument>,
        @InjectModel(Process.name) private processModel: Model<ProcessDocument>,
    ) {}

    async create(createDto: CreateExecutionDto): Promise<Execution> {
        const exists = await this.processModel.exists({ _id: createDto.processId });
        if (!exists) throw new NotFoundException(`Process ${createDto.processId} not found`);

        const created = new this.executionModel({
            ...createDto,
            processId: new Types.ObjectId(createDto.processId),
            startDate: new Date(createDto.startDate),
            endDate: createDto.endDate ? new Date(createDto.endDate) : undefined,
        });
        return created.save();
    }

    async findOne(id: string): Promise<Execution> {
        const doc = await this.executionModel.findById(id).exec();
        if (!doc) throw new NotFoundException(`Execution ${id} not found`);
        return doc;
    }

    async findByProcessId(processId: string): Promise<Execution[]> {
        const exists = await this.processModel.exists({ _id: processId });
        if (!exists) throw new NotFoundException(`Process ${processId} not found`);
        return this.executionModel.find({ processId: new Types.ObjectId(processId) }).exec();
    }

    async update(id: string, updateDto: UpdateExecutionDto): Promise<Execution> {
        if (updateDto.processId) {
            const exists = await this.processModel.exists({ _id: updateDto.processId });
            if (!exists) throw new NotFoundException(`Process ${updateDto.processId} not found`);
        }

        const payload: Record<string, unknown> = { ...updateDto };
        if (updateDto.processId) payload.processId = new Types.ObjectId(updateDto.processId);
        if (updateDto.startDate) payload.startDate = new Date(updateDto.startDate);
        if (updateDto.endDate) payload.endDate = new Date(updateDto.endDate);

        const updated = await this.executionModel
            .findByIdAndUpdate(id, payload, { new: true, runValidators: true })
            .exec();
        if (!updated) throw new NotFoundException(`Execution ${id} not found`);
        return updated;
    }

    async remove(id: string): Promise<Execution> {
        const deleted = await this.executionModel.findByIdAndDelete(id).exec();
        if (!deleted) throw new NotFoundException(`Execution ${id} not found`);
        return deleted;
    }
}
