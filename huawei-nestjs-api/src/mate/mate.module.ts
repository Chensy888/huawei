import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MateEntity } from 'src/entities/mate.entity';
import { MateController } from './mate.controller';
import { MateService } from './mate.service';


@Module({
  imports:[TypeOrmModule.forFeature([MateEntity])],
  controllers: [MateController],
  providers: [MateService],
})
export class MateModule {}
