import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrecinctEntity } from 'src/entities/precinct.entuty';
import { PrecinctController } from './precinct.controller';
import { PrecinctService } from './precinct.service';

@Module({
  imports:[TypeOrmModule.forFeature([PrecinctEntity])],
  controllers: [PrecinctController],
  providers: [PrecinctService],
})
export class PrecinctModule {}