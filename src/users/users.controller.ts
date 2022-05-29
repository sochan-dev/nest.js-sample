import { UsersService } from './users.service';
import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
  @UseGuards(AuthGuard('jwt'))
  @Get(':username')
  findone(@Param('username') username: string) {
    return this.usersService.findOne(username);
  }
  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    //@Post(':id')とかにして@paramとかもできる。すごい
    return this.usersService.create(createUser);
  }
}
