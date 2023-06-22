import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { TaskModule } from 'src/task/task.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [MemberController],
  providers: [MemberService],
  imports: [TaskModule, UserModule],
})
export class MemberModule {}
