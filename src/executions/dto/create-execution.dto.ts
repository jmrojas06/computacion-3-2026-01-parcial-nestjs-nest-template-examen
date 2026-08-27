import { IsString, IsNotEmpty, IsOptional, IsEnum, IsNumber, IsDateString, IsMongoId } from 'class-validator';

import { ExecutionStatus } from '../schemas/execution.schema';

export class CreateExecutionDto {
    @IsMongoId()
    @IsNotEmpty()
    processId: string;

    @IsDateString()
    @IsNotEmpty()
    startDate: string;

    @IsDateString()
    @IsOptional()
    endDate?: string;

    @IsString()
    @IsNotEmpty()
    operatorUsername: string;

    @IsEnum(ExecutionStatus)
    @IsOptional()
    status?: ExecutionStatus;

    @IsString()
    @IsOptional()
    notes?: string;

    @IsNumber()
    @IsOptional()
    measuredPH?: number;

    @IsNumber()
    @IsOptional()
    measuredTemperature?: number;
}
