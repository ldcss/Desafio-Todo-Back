import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTask.dto';
import { Task } from './entities/task.entity';
import { AppDataSource } from 'src/app.datasource';

@Injectable()
export class TaskService {
  async create(createTaskDto: CreateTaskDto) {
    const task = new Task();
    task.name = createTaskDto.name;
    task.description = createTaskDto.description;
    task.priority = createTaskDto.priority;
    task.finished = false;

    return await AppDataSource.createQueryBuilder().insert().into(Task).values(task).execute();
  }

  async findAll(): Promise<Task[]> {
    const tasks = await AppDataSource.createQueryBuilder().select('t').from(Task, 't').getMany();
    return tasks;
  }
}
