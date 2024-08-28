import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCourse {
  @IsString()
  @IsNotEmpty()
  creator!: string;

  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  description!: string;

  @IsString()
  @IsNotEmpty()
  image!: string;
}
