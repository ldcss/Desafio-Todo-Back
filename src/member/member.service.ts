import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/app.datasource';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  async findAll(): Promise<Member[]> {
    const members = await AppDataSource.createQueryBuilder()
      .select('m')
      .from(Member, 'm')
      .getMany();
    return members;
  }
}
