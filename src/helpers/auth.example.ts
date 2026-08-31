/**
 * AYUDAS PARCIAL - AUTH JWT (descomentar si te piden auth)
 * Ya tienes instalados: bcrypt, @nestjs/jwt, passport-jwt, @nestjs/passport
 * Copiar/pegar este archivo a src/auth/ y activar en app.module.ts
 * No se importa por defecto para no romper el build si no te lo piden.
 */

// // src/auth/auth.service.ts
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { User, UserDocument } from './schemas/user.schema';
//
// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectModel(User.name) private userModel: Model<UserDocument>,
//     private jwtService: JwtService,
//   ) {}
//
//   async register(username: string, password: string) {
//     const hash = await bcrypt.hash(password, 10);
//     const user = new this.userModel({ username, password: hash });
//     return user.save();
//   }
//
//   async login(username: string, password: string) {
//     const user = await this.userModel.findOne({ username }).exec();
//     if (!user) throw new UnauthorizedException('Invalid credentials');
//     const ok = await bcrypt.compare(password, user.password);
//     if (!ok) throw new UnauthorizedException('Invalid credentials');
//     const payload = { sub: user._id, username: user.username };
//     return { access_token: this.jwtService.sign(payload) };
//   }
// }

// // src/auth/schemas/user.schema.ts
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { HydratedDocument } from 'mongoose';
// export type UserDocument = HydratedDocument<User>;
// @Schema()
// export class User {
//   @Prop({ required: true, unique: true }) username: string;
//   @Prop({ required: true }) password: string;
// }
// export const UserSchema = SchemaFactory.createForClass(User);

// // src/auth/jwt.strategy.ts
// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor() {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
//       secretOrKey: process.env.JWT_SECRET ?? 'secret123',
//     });
//   }
//   async validate(payload: any) { return { userId: payload.sub, username: payload.username }; }
// }

// // src/auth/jwt-auth.guard.ts
// import { Injectable } from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// @Injectable()
// export class JwtAuthGuard extends AuthGuard('jwt') {}

// // src/auth/auth.controller.ts
// import { Controller, Post, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';
// @Controller('auth')
// export class AuthController {
//   constructor(private auth: AuthService) {}
//   @Post('register') register(@Body() dto: { username: string; password: string }) { return this.auth.register(dto.username, dto.password); }
//   @Post('login') login(@Body() dto: { username: string; password: string }) { return this.auth.login(dto.username, dto.password); }
// }

// // src/auth/auth.module.ts
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { User, UserSchema } from './schemas/user.schema';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { JwtStrategy } from './jwt.strategy';
// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
//     PassportModule,
//     JwtModule.register({ secret: process.env.JWT_SECRET ?? 'secret123', signOptions: { expiresIn: '1h' } }),
//   ],
//   providers: [AuthService, JwtStrategy],
//   controllers: [AuthController],
// })
// export class AuthModule {}

// COMENTARIO: Para proteger una ruta, en el controller descomenta:
// // import { UseGuards } from '@nestjs/common';
// // import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// // @UseGuards(JwtAuthGuard)
// // @Get() findAll() {}
