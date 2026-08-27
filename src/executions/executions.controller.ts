import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';

import { ParseObjectIdPipe } from '../common/pipes/parse-object-id.pipe';

import { ExecutionsService } from './executions.service';
import { CreateExecutionDto } from './dto/create-execution.dto';
import { UpdateExecutionDto } from './dto/update-execution.dto';

@Controller('executions')
export class ExecutionsController {
    constructor(private readonly executionsService: ExecutionsService) {}

    @Post()
    create(@Body() dto: CreateExecutionDto) {
        return this.executionsService.create(dto);
    }

    @Get('process/:processId')
    findByProcessId(@Param('processId', ParseObjectIdPipe) processId: string) {
        return this.executionsService.findByProcessId(processId);
    }

    @Get(':id')
    findOne(@Param('id', ParseObjectIdPipe) id: string) {
        return this.executionsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: UpdateExecutionDto) {
        return this.executionsService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseObjectIdPipe) id: string) {
        return this.executionsService.remove(id);
    }
}
