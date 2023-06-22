import { Body, Controller, Delete, Get, Post, Put, Res } from '@nestjs/common';
import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/createMember.dto';
import { Response } from 'express';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @Post()
  async create(@Body() createMemberDto: CreateMemberDto, @Res() res: Response) {
    return 'this action create a member';
  }

  @Get()
  async getAll(@Res() res: Response) {
    return 'this action gets all members';
  }

  @Put()
  async update() {
    return 'this action updates a member';
  }

  @Delete()
  async remove() {
    return 'this action deletes a member';
  }
}
