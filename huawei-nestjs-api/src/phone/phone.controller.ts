import { Controller, Get } from '@nestjs/common';
import { PhoneService } from './phone.service';
import { PhoneEntity } from 'src/entities/phone.entity';


@Controller('phone')
export class PhoneController {
  constructor(private readonly phoneService: PhoneService) { }

  @Get('list')
  findAll(): Promise<PhoneEntity[]> {
    return this.phoneService.findAll();
  }
}
