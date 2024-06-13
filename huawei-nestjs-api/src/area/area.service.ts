import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AreaEntity } from 'src/entities/area.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AreaService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(AreaEntity)
    private readonly areaRepository: Repository<AreaEntity>,
  ) { }
  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<AreaEntity[]> {
    return await this.areaRepository.query('select * from area');
  }
}
