import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //配置静态资源目录
  // app.useStaticAssets('public')
  //配置虚拟目录
  app.useStaticAssets('public',{
    prefix:'/static/'
  })
  //先要安装模板引擎 npm i ejs --save
  app.setBaseViewsDir('views')
  app.setViewEngine('ejs')

  const cors = require("cors");
  app.use(cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
  }));

  await app.listen(3000);
}
bootstrap();
