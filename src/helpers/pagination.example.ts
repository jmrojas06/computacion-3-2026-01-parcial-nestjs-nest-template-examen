/**
 * AYUDAS PARCIAL - PAGINACIÓN (descomentar si te piden ?page & ?limit)
 * Copiar el bloque en tu Service y Controller
 */

// // En ProcessService:
// async findAllPaginated(page = 1, limit = 10) {
//   const skip = (page - 1) * limit;
//   const [data, total] = await Promise.all([
//     this.processModel.find().skip(skip).limit(limit).exec(),
//     this.processModel.countDocuments().exec(),
//   ]);
//   return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
// }

// // En ProcessesController:
// @Get()
// findAll(@Query('page') page = '1', @Query('limit') limit = '10') {
//   return this.processesService.findAllPaginated(parseInt(page, 10), parseInt(limit, 10));
// }

// // Para Execution (con filtro por processId):
// async findByProcessIdPaginated(processId: string, page = 1, limit = 10) {
//   const exists = await this.processModel.exists({ _id: processId });
//   if (!exists) throw new NotFoundException(`Process ${processId} not found`);
//   const skip = (page - 1) * limit;
//   const [data, total] = await Promise.all([
//     this.executionModel.find({ processId: new Types.ObjectId(processId) }).skip(skip).limit(limit).exec(),
//     this.executionModel.countDocuments({ processId: new Types.ObjectId(processId) }).exec(),
//   ]);
//   return { data, total, page, limit, totalPages: Math.ceil(total / limit) };
// }

// // Test curl:
// // curl "http://localhost:3000/processes?page=1&limit=5"
// // curl "http://localhost:3000/executions/process/<id>?page=2&limit=10"

// // TYPEORM alternativa (si piden SQL):
// // async findAllPaginated(page=1, limit=10) {
// //   const [data, total] = await this.repo.findAndCount({ skip: (page-1)*limit, take: limit, order: { createdAt: 'DESC' } });
// //   return { data, total, page, limit };
// // }
