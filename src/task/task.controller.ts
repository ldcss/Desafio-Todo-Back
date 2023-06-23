import { Body, Controller, Delete, Get, Post, Put, Res } from '@nestjs/common';
import { TaskService } from './task.service';
import { Response } from 'express';
import { CreateTaskDto } from './dto/createTask.dto';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto, @Res() res: Response) {
    const createdTask = await this.taskService.create(createTaskDto);
    return res.status(201).send(createdTask);
  }

  @Get()
  async getAll(@Res() res: Response) {
    const tasks = await this.taskService.findAll();
    return res.status(200).send(tasks);
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
