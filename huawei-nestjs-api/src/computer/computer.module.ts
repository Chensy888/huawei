import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComputerEntity } from 'src/entities/computer.entity';
import { ComputerController } from './computer.controller';
import { ComputerService } from './computer.service';


@Module({
  imports:[TypeOrmModule.forFeature([ComputerEntity])],
  controllers: [ComputerController],
  providers: [ComputerService],
})
export class ComputerModule {}