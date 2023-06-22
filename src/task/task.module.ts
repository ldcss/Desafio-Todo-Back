import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MemberModule } from '../member/member.module';
import { UserModule } from '../user/user.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [MemberModule, UserModule],
})
export class TaskModule {}
