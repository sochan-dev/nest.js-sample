import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    //@Post(':id')とかにして@paramとかもできる。すごい
    return this.authService.login(createUser);
  }
}
