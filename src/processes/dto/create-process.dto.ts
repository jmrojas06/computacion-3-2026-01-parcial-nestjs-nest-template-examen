import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber } from 'class-validator';

import { ProcessState } from '../schemas/process.schema';

export class CreateProcessDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsEnum(ProcessState)
    @IsOptional()
    state?: ProcessState;

    @IsNumber()
    @IsOptional()
    targetTemperature?: number;

    @IsNumber()
    @IsOptional()
    targetPH?: number;

    @IsNumber()
    @IsOptional()
    maxDurationHours?: number;
}
