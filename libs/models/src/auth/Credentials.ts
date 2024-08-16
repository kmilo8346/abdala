import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class Credentials {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  username!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}
