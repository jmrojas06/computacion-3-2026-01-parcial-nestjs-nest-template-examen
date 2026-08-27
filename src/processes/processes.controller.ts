import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

import { ParseObjectIdPipe } from '../common/pipes/parse-object-id.pipe';

import { ProcessesService } from './processes.service';
import { CreateProcessDto } from './dto/create-process.dto';
import { UpdateProcessDto } from './dto/update-process.dto';

@Controller('processes')
export class ProcessesController {
    constructor(private readonly processesService: ProcessesService) {}

    @Post()
    create(@Body() dto: CreateProcessDto) {
        return this.processesService.create(dto);
    }

    @Get()
    findAll() {
        return this.processesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseObjectIdPipe) id: string) {
        return this.processesService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: UpdateProcessDto) {
        return this.processesService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseObjectIdPipe) id: string) {
        return this.processesService.remove(id);
    }
}
