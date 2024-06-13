import { Controller, Get } from '@nestjs/common';
import { AreaService } from './area.service';
import { AreaEntity } from 'src/entities/area.entity';


@Controller('area')
export class AreaController {
  constructor(private readonly areaService: AreaService) { }

  @Get('list')
  findAll(): Promise<AreaEntity[]> {
    return this.areaService.findAll();
  }
}
