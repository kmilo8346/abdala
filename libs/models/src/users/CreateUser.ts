import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUser {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
