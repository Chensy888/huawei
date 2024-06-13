import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrecinctEntity } from 'src/entities/precinct.entuty';
import { Repository } from 'typeorm';

@Injectable()
export class PrecinctService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(PrecinctEntity)
    private readonly precinctRepository: Repository<PrecinctEntity>,
  ) { }
  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<PrecinctEntity[]> {
    return await this.precinctRepository.query('select * from precinct');
  }
}