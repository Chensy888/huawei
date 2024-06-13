import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreaEntity } from 'src/entities/area.entity';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';


@Module({
  imports:[TypeOrmModule.forFeature([AreaEntity])],
  controllers: [AreaController],
  providers: [AreaService],
})
export class AreaModule {}