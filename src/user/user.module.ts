import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TaskModule } from 'src/task/task.module';
import { MemberModule } from 'src/member/member.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [TaskModule, MemberModule],
})
export class UserModule {}
