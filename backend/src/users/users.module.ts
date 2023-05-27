import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({
    secret: `#]kI."mTC"WumZty5mw,6^Y37XA:*3Js`
  })],
  controllers: [UsersController],
  providers: [UsersService, AuthService],
})
export class UsersModule { }