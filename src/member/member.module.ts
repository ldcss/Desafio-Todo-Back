import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { TaskModule } from 'src/task/task.module';

@Module({
  controllers: [MemberController],
  providers: [MemberService],
  imports: [TaskModule],
})
export class MemberModule {}
