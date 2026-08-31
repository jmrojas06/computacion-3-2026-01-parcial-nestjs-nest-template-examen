/**
 * AYUDAS PARCIAL - VALIDACIONES EXTRA (descomentar si te piden rangos, fechas, etc)
 */

// // En CreateProcessDto - rangos típicos que piden:
// // @IsNumber() @Min(0) @Max(100) @IsOptional() targetTemperature?: number;
// // @IsNumber() @Min(0) @Max(14) @IsOptional() targetPH?: number; // pH 0-14
// // @IsNumber() @Min(1) @Max(1000) @IsOptional() maxDurationHours?: number;

// // En CreateExecutionDto - validar fechas:
// // @IsDateString() @IsNotEmpty() startDate: string;
// // @IsDateString() @IsOptional() endDate?: string;
// // En service create/update:
// // if (dto.endDate && new Date(dto.endDate) <= new Date(dto.startDate)) {
// //   throw new BadRequestException('endDate must be after startDate');
// // }

// // Validar operatorUsername sin espacios:
// // @IsString() @Matches(/^[a-zA-Z0-9_]+$/, { message: 'username solo alfanumerico' }) operatorUsername: string;

// // Validar notas con longitud:
// // @IsString() @IsOptional() @MaxLength(500) notes?: string;

// // Si te piden transformar: en main.ts ya tienes transform:true, puedes añadir:
// // @Type(() => Number) @IsNumber() targetTemperature: number; // necesita "class-transformer"

// // Si te piden whitelist estricta: en main.ts ya tienes whitelist+forbidNonWhitelisted
