import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ff') //ルートのパスを記述
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('gg') //ルートのパスから連なるパスを記述。
  getHello(): string {
    return this.appService.getHello();
  }
}
