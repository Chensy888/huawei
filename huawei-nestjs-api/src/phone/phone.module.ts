import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneEntity } from 'src/entities/phone.entity';
import { PhoneController } from './phone.controller';
import { PhoneService } from './phone.service';

@Module({
  imports:[TypeOrmModule.forFeature([PhoneEntity])],
  controllers: [PhoneController],
  providers: [PhoneService],
})
export class PhoneModule {}
