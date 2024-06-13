import { Controller, Get, Param } from '@nestjs/common';
import { MateService } from './mate.service';
import { MateEntity } from 'src/entities/mate.entity';


@Controller('mate')
export class MateController {
  constructor(private readonly mateService: MateService) { }

  @Get('list')
  findAll(): Promise<MateEntity[]> {
    return this.mateService.findAll();
  }

  @Get('sortByComment/:currentPage/:pageSize')
  sortByComment(@Param('currentPage') currentPage:number,@Param('pageSize') pageSize:number): Promise<MateEntity[]> {
    return this.mateService.sortByComment(currentPage,pageSize);
  }

  @Get('sortByPrice/:minprice/:maxprice/:currentPage/:pageSize')
  sortByPrice(@Param('minprice') minprice:number,@Param('maxprice') maxprice:number,@Param('currentPage') currentPage:number,@Param('pageSize') pageSize:number): Promise<MateEntity[]> {
    return this.mateService.sortByPrice(minprice,maxprice,currentPage,pageSize);
  }

  @Get('gitListByPage/:currentPage/:pageSize')
  gitListByPage(@Param('currentPage') currentPage:number,@Param('pageSize') pageSize:number): Promise<MateEntity[]> {
    return this.mateService.gitListByPage(currentPage,pageSize);
  }

  @Get('findById/:id')
  findById(@Param('id') id:number): Promise<MateEntity> {
    return this.mateService.findById(id);
  }
}