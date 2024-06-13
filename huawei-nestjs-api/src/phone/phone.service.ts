import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhoneEntity } from 'src/entities/phone.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhoneService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(PhoneEntity)
    private readonly phoneRepository: Repository<PhoneEntity>,
  ) { }
  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<PhoneEntity[]> {
    return await this.phoneRepository.query('select * from phone');
  }
}
