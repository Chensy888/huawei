import { Controller, Get } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerEntity } from 'src/entities/computer.entity';

@Controller('computer')
export class ComputerController {
  constructor(private readonly computerService: ComputerService) { }

  @Get('list')
  findAll(): Promise<ComputerEntity[]> {
    return this.computerService.findAll();
  }
}
