import { Controller, Get } from '@nestjs/common';
import { PrecinctService } from './precinct.service';
import { PrecinctEntity } from 'src/entities/precinct.entuty';


@Controller('precinct')
export class PrecinctController {
  constructor(private readonly precinctService: PrecinctService) { }

  @Get('list')
  findAll(): Promise<PrecinctEntity[]> {
    return this.precinctService.findAll();
  }
}