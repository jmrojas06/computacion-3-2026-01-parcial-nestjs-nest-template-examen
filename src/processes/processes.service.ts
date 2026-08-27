import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Process, ProcessDocument } from './schemas/process.schema';
import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';

@Injectable()
export class ProcessesService {
    constructor(@InjectModel(Process.name) private processModel: Model<ProcessDocument>) {}

    async create(createDto: CreateProcessDto): Promise<Process> {
        const created = new this.processModel(createDto);
        return created.save();
    }

    async findAll(): Promise<Process[]> {
        return this.processModel.find().exec();
    }

    async findOne(id: string): Promise<Process> {
        const doc = await this.processModel.findById(id).exec();
        if (!doc) throw new NotFoundException(`Process ${id} not found`);
        return doc;
    }

    async update(id: string, updateDto: UpdateProcessDto): Promise<Process> {
        const updated = await this.processModel
            .findByIdAndUpdate(id, updateDto, { new: true, runValidators: true })
            .exec();
        if (!updated) throw new NotFoundException(`Process ${id} not found`);
        return updated;
    }

    async remove(id: string): Promise<Process> {
        const deleted = await this.processModel.findByIdAndDelete(id).exec();
        if (!deleted) throw new NotFoundException(`Process ${id} not found`);
        return deleted;
    }
}
