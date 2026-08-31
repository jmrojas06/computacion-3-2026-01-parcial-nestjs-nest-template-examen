/**
 * AYUDAS PARCIAL - FILTRO DE ERRORES GLOBAL Y INTERCEPTORES
 */

// // src/common/filters/all-exceptions.filter.ts
// import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
// import { Response, Request } from 'express';
// @Catch()
// export class AllExceptionsFilter implements ExceptionFilter {
//   catch(exception: unknown, host: ArgumentsHost) {
//     const ctx = host.switchToHttp();
//     const res = ctx.getResponse<Response>();
//     const req = ctx.getRequest<Request>();
//     const status = exception instanceof HttpException ? exception.getStatus() : HttpStatus.INTERNAL_SERVER_ERROR;
//     const message = exception instanceof HttpException ? exception.getResponse() : 'Internal error';
//     res.status(status).json({ statusCode: status, timestamp: new Date().toISOString(), path: req.url, message });
//   }
// }
// // En main.ts: app.useGlobalFilters(new AllExceptionsFilter());

// // Interceptor para envolver respuestas:
// // import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
// // import { map } from 'rxjs';
// // @Injectable()
// // export class ResponseInterceptor implements NestInterceptor {
// //   intercept(ctx: ExecutionContext, next: CallHandler) {
// //     return next.handle().pipe(map(data => ({ success: true, data })));
// //   }
// // }
// // app.useGlobalInterceptors(new ResponseInterceptor());
