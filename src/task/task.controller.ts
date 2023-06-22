import { Body, Controller, Delete, Get, Post, Put, Res } from '@nestjs/common';
import { TaskService } from './task.service';
import { Response } from 'express';
import { CreateTaskDto } from './dto/createTask.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createMemberDto: CreateTaskDto, @Res() res: Response) {
    return 'this action create a task';
  }

  @Get()
  async getAll(@Res() res: Response) {
    return 'this action gets all tasks';
  }

  @Put()
  async update() {
    return 'this action updates a task';
  }

  @Delete()
  async remove() {
    return 'this action deletes a task';
  }
}
