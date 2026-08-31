/**
 * AYUDAS PARCIAL - FILTROS, BÚSQUEDA Y ORDEN (descomentar si te piden filtros)
 */

// // En ProcessService - Filtro por state y búsqueda por name:
// async findAllFiltered(query: { state?: string; search?: string; sort?: string }) {
//   const filter: any = {};
//   if (query.state) filter.state = query.state;
//   if (query.search) filter.name = { $regex: query.search, $options: 'i' }; // case-insensitive
//   let q = this.processModel.find(filter);
//   if (query.sort === 'asc') q = q.sort({ createdAt: 1 });
//   else q = q.sort({ createdAt: -1 });
//   return q.exec();
// }

// // En Controller:
// @Get()
// findAll(@Query('state') state?: string, @Query('search') search?: string, @Query('sort') sort?: string) {
//   return this.processesService.findAllFiltered({ state, search, sort });
// }

// // En ExecutionService - Filtro por status y operatorUsername:
// async findByProcessIdFiltered(processId: string, query: { status?: string; operator?: string }) {
//   const exists = await this.processModel.exists({ _id: processId });
//   if (!exists) throw new NotFoundException(`Process ${processId} not found`);
//   const filter: any = { processId: new Types.ObjectId(processId) };
//   if (query.status) filter.status = query.status;
//   if (query.operator) filter.operatorUsername = { $regex: query.operator, $options: 'i' };
//   return this.executionModel.find(filter).sort({ startDate: -1 }).exec();
// }

// // Tests:
// // curl "http://localhost:3000/processes?state=active"
// // curl "http://localhost:3000/processes?search=levadura&sort=asc"
// // curl "http://localhost:3000/executions/process/<id>?status=running"

// // TYPEORM:
// // const where: any = {};
// // if (query.state) where.state = query.state;
// // if (query.search) where.name = Like(`%${query.search}%`);
// // return this.repo.find({ where, order: { createdAt: 'DESC' } });
