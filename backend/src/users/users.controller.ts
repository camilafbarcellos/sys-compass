import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
  Req,
  UseInterceptors,
  ClassSerializerInterceptor
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';
import { AuthService } from 'src/auth/auth.service';
import { AuthLoginDto } from 'src/auth/dtos/auth-login.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService,
    private authService: AuthService) { }

  @Post('login')
  async login(@Body() { user, password }: AuthLoginDto) {
    return this.authService.login(user, password);
  }

  @UseGuards(AuthGuard)
  @Get('me')
  async me(@Req() req) {
    return req.tokenPayLoad;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Post()
  async createUser(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async getUsers() {
    return await this.usersService.findAll();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get(':id')
  async getUser(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userUpdated: UpdateUserDto) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.usersService.update(id, userUpdated);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    this.usersService.remove(id);
    return;
  }
}
