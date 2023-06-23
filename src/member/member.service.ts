import { Injectable } from '@nestjs/common';
import { AppDataSource } from 'src/app.datasource';
import { Member } from './entities/member.entity';
import { CreateMemberDto } from './dto/createMember.dto';

@Injectable()
export class MemberService {
  async create(createMemberDto: CreateMemberDto) {
    const member = new Member();
    member.name = createMemberDto.name;
    member.email = createMemberDto.email;
    member.tasks = undefined;

    return await AppDataSource.createQueryBuilder().insert().into(Member).values(member).execute();
  }
  async findAll(): Promise<Member[]> {
    const members = await AppDataSource.createQueryBuilder()
      .select('m')
      .from(Member, 'm')
      .getMany();
    return members;
  }
}
