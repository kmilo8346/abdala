import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateCourse {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  image?: string;
}
