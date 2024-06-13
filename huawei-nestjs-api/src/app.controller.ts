import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("news")
  getNews(): string {
    return "测试";
  }

  @Get("yinqing")
  @Render('default/index')
  getIndex(){
    return {"name":"张三"}
  }
}
