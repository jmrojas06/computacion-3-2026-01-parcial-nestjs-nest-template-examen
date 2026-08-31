/**
 * AYUDAS PARCIAL - GUARDS Y ROLES (si te piden proteger rutas por rol)
 */

// // src/common/guards/roles.guard.ts
// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private reflector: Reflector) {}
//   canActivate(ctx: ExecutionContext): boolean {
//     const roles = this.reflector.getAllAndOverride<string[]>('roles', [ctx.getHandler(), ctx.getClass()]);
//     if (!roles) return true;
//     const req = ctx.switchToHttp().getRequest();
//     const user = req.user;
//     return user && roles.includes(user.role);
//   }
// }

// // Uso en controller:
// // import { SetMetadata, UseGuards } from '@nestjs/common';
// // export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
// // @UseGuards(JwtAuthGuard, RolesGuard)
// // @Roles('admin')
// // @Delete(':id') remove(@Param('id', ParseObjectIdPipe) id: string) { return this.service.remove(id); }

// // Guard simple sin JWT (si te piden header api-key):
// // @Injectable()
// // export class ApiKeyGuard implements CanActivate {
// //   canActivate(ctx: ExecutionContext): boolean {
// //     const req = ctx.switchToHttp().getRequest();
// //     return req.headers['x-api-key'] === process.env.API_KEY;
// //   }
// // }
