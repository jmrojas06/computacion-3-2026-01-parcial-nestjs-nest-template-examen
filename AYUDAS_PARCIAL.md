# AYUDAS PARCIAL — Kit para sacar 5 (legal, copiar/pegar)
> Todo esto está **comentado y listo para activar** si te lo piden. No rompe el build actual. Solo descomenta/recopía.

---

## Índice rápido
1. [Si te piden cambiar de Mongo a Postgres (TypeORM)](#1-si-te-piden-postgrestypeorm)
2. [Si te piden Auth JWT (login/register + Guard)](#2-si-te-piden-auth-jwt)
3. [Si te piden Paginación](#3-si-te-piden-paginación)
4. [Si te piden Filtros/Búsqueda/Orden](#4-si-te-piden-filtros)
5. [Si te piden Validaciones extra (rangos, fechas)](#5-si-te-piden-validaciones-extra)
6. [Si te piden Soft Delete](#6-si-te-piden-soft-delete)
7. [Si te piden Populate/Relaciones avanzadas](#7-si-te-piden-populate)
8. [Si te piden Guards/Roles](#8-si-te-piden-guards)
9. [Si te piden Manejo de errores global](#9-si-te-piden-manejo-de-errores)
10. [Si te piden Tests e2e](#10-si-te-piden-tests)
11. [Si te piden Docker extra / .env](#11-si-te-piden-docker)
12. [Si te piden CORS/Helmet](#12-si-te-piden-cors)
13. [Snippets de DTOs listos](#13-snippets-dtos)
14. [Snippets de Controller listos](#14-snippets-controller)
15. [Comandos de emergencia](#15-comandos)

---

## 1. Si te piden Postgres/TypeORM (en vez de Mongo)

Tu plantilla original es Postgres, pero el PDF pide Mongo. Si en el parcial te piden SQL, **descomenta el bloque TypeORM** en `src/helpers/typeorm-process.entity.example.ts`.

**Pasos flash (2 min):**
```bash
# docker-compose.yml ya tiene ejemplo comentado para postgres
# .env.example tiene DB_* comentado
# app.module.ts tiene bloque TypeOrmModule comentado
```
En `src/helpers/typeorm-process.entity.example.ts` tienes:
```ts
// @Entity('processes')
// export class Process { @PrimaryGeneratedColumn('uuid') id: string; @Column() name: string; ... }
```
Para cambiar, copia ese archivo a `src/processes/entities/process.entity.ts` y cambia `MongooseModule` por `TypeOrmModule.forFeature([Process])` en `processes.module.ts` (el código comentado está en `src/helpers/app-module-typeorm.example.ts`).

---

## 2. Si te piden Auth JWT

Tienes `bcrypt`, `@nestjs/jwt`, `passport-jwt` ya instalados (`package.json`).

**Snippet copiar/pegar:** `src/helpers/auth.example.ts` — contiene:
- `AuthService` con `register` (hash con bcrypt) y `login` (sign JWT)
- `JwtStrategy` (`passport-jwt`)
- `AuthModule` y `JwtAuthGuard`

**Activación (1 min):**
```ts
// en app.module.ts
// import { AuthModule } from './auth/auth.module';
// imports: [AuthModule, ...]
```
Luego protege rutas:
```ts
// en processes.controller.ts
// @UseGuards(JwtAuthGuard)
// @Get() findAll() {}
```
Prueba:
```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username":"admin","password":"1234"}'
curl -X POST http://localhost:3000/auth/login -d '{"username":"admin","password":"1234"}' # te da token
curl http://localhost:3000/processes -H "Authorization: Bearer <token>"
```

---

## 3. Si te piden Paginación

**Archivo:** `src/helpers/pagination.example.ts`

**Uso en service (descomenta):**
```ts
// async findAll(page = 1, limit = 10) {
//   const skip = (page - 1) * limit;
//   return this.processModel.find().skip(skip).limit(limit).exec();
// }
```
**En controller:**
```ts
// @Get()
// findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
//   return this.processesService.findAll(+page, +limit);
// }
```
Test:
```bash
curl "http://localhost:3000/processes?page=1&limit=5"
```

**Para TypeORM:**
```ts
// findAndCount({ skip, take: limit })
```

---

## 4. Si te piden Filtros

**Archivo:** `src/helpers/filter.example.ts`

```ts
// Async findAll(@Query() query) {
//   const filter: any = {};
//   if (query.state) filter.state = query.state;
//   if (query.search) filter.name = { $regex: query.search, $options: 'i' };
//   return this.processModel.find(filter).exec();
// }
```
Ejemplos:
```bash
curl "http://localhost:3000/processes?state=active"
curl "http://localhost:3000/processes?search=levadura"
curl "http://localhost:3000/executions/process/<id>?status=running"
```

**Orden:**
```ts
// .sort({ createdAt: -1 }) // -1 desc, 1 asc
```

---

## 5. Si te piden Validaciones extra

**Archivo:** `src/helpers/extra-validations.example.ts`

Descomenta según te pidan:
```ts
// @IsOptional() @Min(0) @Max(100) targetTemperature?: number;
// @IsOptional() @Min(0) @Max(14) targetPH?: number; // pH 0-14
// @IsDateString() @IsOptional() endDate?: string; // validar que endDate > startDate en service:
// if (dto.endDate && new Date(dto.endDate) < new Date(dto.startDate)) throw new BadRequestException('endDate must be after startDate');
```

---

## 6. Si te piden Soft Delete

En vez de `findByIdAndDelete`, usa flag:

**Schema:**
```ts
// @Prop({ default: false }) isDeleted: boolean;
// @Prop() deletedAt: Date;
```

**Service:**
```ts
// async remove(id: string) {
//   return this.processModel.findByIdAndUpdate(id, { isDeleted: true, deletedAt: new Date() }, { new: true });
// }
// async findAll() {
//   return this.processModel.find({ isDeleted: false }).exec();
// }
```

---

## 7. Si te piden Populate

Para traer el Process dentro de Execution:

```ts
// return this.executionModel.findById(id).populate('processId').exec();
// return this.executionModel.find({ processId }).populate('processId', 'name state').exec();
```

Si te piden **agregación** (contar executions por process):
```ts
// return this.executionModel.aggregate([
//   { $group: { _id: '$processId', count: { $sum: 1 } } }
// ]);
```

---

## 8. Si te piden Guards

Ver `src/helpers/guards.example.ts`:
```ts
// @Injectable() export class RolesGuard implements CanActivate { canActivate(ctx) { const req = ctx.switchToHttp().getRequest(); return req.user.role === 'admin'; } }
// @UseGuards(JwtAuthGuard, RolesGuard)
// @SetMetadata('roles', ['admin'])
```

---

## 9. Si te piden Manejo de errores

Ya tienes `NotFoundException` (404) y `BadRequestException` (400). Si te piden **filtro global**:

```ts
// @Catch() export class AllExceptionsFilter implements ExceptionFilter { catch(exception, host) { ... } }
// app.useGlobalFilters(new AllExceptionsFilter());
```

En `src/helpers/error-filter.example.ts`.

---

## 10. Si te piden Tests

**E2E snippet** `test/app.e2e-spec.ts` ya existe. Descomenta el bloque en `src/helpers/tests.example.ts`:

```ts
// it('/processes (POST)', () => request(app.getHttpServer()).post('/processes').send({ name: 'Test' }).expect(201));
// it('/executions (GET) 404', () => request(app.getHttpServer()).get('/executions/process/000000000000000000000000').expect(404));
```

Correr:
```bash
npm run test
npm run test:e2e
```

---

## 11. Si te piden Docker

**Mongo** ya está en `docker-compose.yml`. Si te piden **Postgres alternativo**, descomenta el bloque comentado en `docker-compose.yml`:
```yaml
# db:
#   image: postgres:16
#   ports: ["5433:5432"]
```
**Comandos:**
```bash
docker compose up -d
docker ps
docker logs mongo-bioprocess
docker compose down -v # borra datos
```

**.env:** ya tienes `MONGO_URI`. Si te piden `DB_*`, copia el bloque comentado en `.env.example`.

---

## 12. Si te piden CORS

En `src/main.ts`:
```ts
// app.enableCors({ origin: '*', methods: 'GET,POST,PATCH,DELETE' });
// app.setGlobalPrefix('api');
```

---

## 13. Snippets DTOs

**Crear DTO con validación completa:**
```ts
export class CreateProcessDto {
  @IsString() @IsNotEmpty() name: string;
  @IsString() @IsOptional() description?: string;
  @IsEnum(ProcessState) @IsOptional() state?: ProcessState;
  @IsNumber() @Min(0) @Max(100) @IsOptional() targetTemperature?: number;
  @IsNumber() @Min(0) @Max(14) @IsOptional() targetPH?: number;
  @IsNumber() @IsOptional() maxDurationHours?: number;
}
export class UpdateProcessDto extends PartialType(CreateProcessDto) {}
```

**Para TypeORM con `class-transformer`:**
```ts
// @Type(() => Number) @IsNumber() targetTemperature: number;
```

---

## 14. Snippets Controller

**CRUD completo copiar/pegar:**
```ts
@Controller('processes')
export class ProcessesController {
  constructor(private readonly service: ProcessesService) {}
  @Post() create(@Body() dto: CreateProcessDto) { return this.service.create(dto); }
  @Get() findAll() { return this.service.findAll(); }
  @Get(':id') findOne(@Param('id', ParseObjectIdPipe) id: string) { return this.service.findOne(id); }
  @Patch(':id') update(@Param('id', ParseObjectIdPipe) id: string, @Body() dto: UpdateProcessDto) { return this.service.update(id, dto); }
  @Delete(':id') remove(@Param('id', ParseObjectIdPipe) id: string) { return this.service.remove(id); }
}
```

---

## 15. Comandos de emergencia

```bash
# Si no compila
npm run build
# ver error de TS y arreglar

# Si puerto 3000 ocupado
lsof -i :3000 # o ss -tulpn | grep 3000
kill <pid>
# o cambia PORT=3001 en .env

# Si Mongo no conecta
cat .env | grep MONGO_URI
docker logs mongo-bioprocess
# prueba authSource=admin

# Si te piden validar ObjectId
# Ya tienes ParseObjectIdPipe, solo pon @Param('id', ParseObjectIdPipe)

# Git rápido
git status
git checkout -b feature/<nombre>
git add .
git commit -m "feat(scope): description"
git push -u origin feature/<nombre>
```

---

## 16. Checklist final antes de entregar (2 min)

- [ ] `npm run build` sin errores
- [ ] `docker compose ps` muestra mongo Up
- [ ] Probaste `POST /processes` y te devuelve `_id` y `createdAt`
- [ ] Probaste `POST /executions` con `processId` válido e inválido (404)
- [ ] Probaste `GET /executions/process/:id` y `PATCH`/`DELETE`
- [ ] `ValidationPipe` activo en `main.ts`
- [ ] Todos los `NotFoundException` con mensaje claro
- [ ] No dejaste `console.log` olvidados
- [ ] Commits con Conventional Commits

---

> **Tip final:** Si te piden algo que no está aquí, busca el archivo `src/helpers/*.example.ts` — ahí está la plantilla comentada. Solo copia, pega y ajusta nombres.

¡A por el 5!
