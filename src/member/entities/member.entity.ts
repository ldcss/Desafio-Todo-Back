import { MinLength } from 'class-validator';
import { Task } from 'src/task/entities/task.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'member' })
export class Member {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id!: number;

  @MinLength(5)
  @Column({ name: 'name', length: 100 })
  name!: string;

  @Column({ name: 'email', unique: true })
  email!: string;

  @OneToMany(() => Task, tasks => tasks.member, {
    eager: true,
    cascade: ['update'],
    nullable: true,
  })
  tasks?: Task[];
}
