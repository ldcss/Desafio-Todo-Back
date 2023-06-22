import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email!: string;
}
