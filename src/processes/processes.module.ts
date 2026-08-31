import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { Process, ProcessSchema } from './schemas/process.schema';
import { ProcessesService } from './processes.service';
import { ProcessesController } from './processes.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: Process.name, schema: ProcessSchema }])],
    controllers: [ProcessesController],
    providers: [ProcessesService],
    exports: [MongooseModule, ProcessesService],
})
export class ProcessesModule {}
