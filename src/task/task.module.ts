import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { MemberModule } from 'src/member/member.module';
import { UserModule } from 'src/user/user.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [MemberModule, UserModule],
})
export class TaskModule {}
