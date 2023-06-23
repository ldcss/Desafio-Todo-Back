import { IsBoolean, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Member } from 'src/member/entities/member.entity';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  name!: string;

  @IsString()
  @MaxLength(140)
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  finished!: boolean;

  @IsString()
  @IsNotEmpty()
  priority!: string;

  member?: string;
}
