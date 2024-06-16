import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MateEntity } from 'src/entities/mate.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MateService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(MateEntity)
    private readonly mateRepository: Repository<MateEntity>,
  ) { }
  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<MateEntity[]> {
    return await this.mateRepository.query(`select * from mate`);
  }

  //分页
  async gitListByPage(currentPage: number, pageSize: number): Promise<MateEntity[]> {
    return await this.mateRepository.query(
      `select * from mate where is_del = false limit ${(currentPage - 1) * pageSize},${pageSize}`,
    );
  }

  //根据评论排序
  async sortByComment(currentPage: number, pageSize: number): Promise<MateEntity[]> {
    return await this.mateRepository
      .query(`select * from mate where is_del = false order by comment desc limit ${(currentPage - 1) * pageSize},${pageSize}`);
  }

  //根据价格排序
  async sortByPrice(minprice:number,maxprice:number,currentPage: number, pageSize: number): Promise<MateEntity[]> {
    let sql = `select * from mate where is_del = false and price between ? and ? order by price desc limit ${(currentPage - 1) * pageSize},${pageSize}`;  
    return await this.mateRepository.query(sql,[minprice,maxprice]);
  }

  //根据id查询
  async findById(id: number): Promise<MateEntity> {
    return await this.mateRepository
      .query(`select * from mate where id = ${id}`)
  }
}
