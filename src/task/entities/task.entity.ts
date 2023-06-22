import { MinLength } from 'class-validator';
import { Member } from 'src/member/entities/member.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn('increment', { name: 'id' })
  id!: number;

  @MinLength(5)
  @Column({ name: 'name', length: 50 })
  name!: string;

  @Column({ name: 'description', length: 140, nullable: true })
  description?: string;

  @Column({ name: 'finished' })
  finished!: boolean;

  @Column({ name: 'finishedAt', type: 'timestamptz' })
  finishedAt!: Date;

  @Column({ name: 'priority', default: 'Baixa' })
  priority!: string;

  @ManyToOne('member', { nullable: true })
  @JoinColumn({ name: 'memberId' })
  member?: Member;
}
