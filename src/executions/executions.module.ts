import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Process, ProcessSchema } from '../processes/schemas/process.schema';

import { Execution, ExecutionSchema } from './schemas/execution.schema';
import { ExecutionsService } from './executions.service';
import { ExecutionsController } from './executions.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Execution.name, schema: ExecutionSchema },
            { name: Process.name, schema: ProcessSchema },
        ]),
    ],
    controllers: [ExecutionsController],
    providers: [ExecutionsService],
})
export class ExecutionsModule {}
