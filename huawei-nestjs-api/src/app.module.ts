import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PhoneModule } from './phone/phone.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateModule } from './mate/mate.module';
import { AreaModule } from './area/area.module';
import { ComputerModule } from './computer/computer.module';
import { PrecinctModule } from './precinct/precinct.module';

@Module({
  imports: [
    // 加载连接数据库
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'huawei',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      synchronize: true, // 定义数据库表结构与实体类字段同步
    }),
    // 加载子模块
    PhoneModule,
    MateModule,
    AreaModule,
    ComputerModule,
    PrecinctModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
