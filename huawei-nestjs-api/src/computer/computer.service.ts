import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComputerEntity } from 'src/entities/computer.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ComputerService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(ComputerEntity)
    private readonly computerRepository: Repository<ComputerEntity>,
  ) { }
  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<ComputerEntity[]> {
    return await this.computerRepository.query('select * from computer');
  }
}