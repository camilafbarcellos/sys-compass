import { IsEmail, IsString } from 'class-validator';

export class UpdateUserDto {

  @IsString()
  name: string;

  @IsString()
  user: string;  

  @IsString()
  birthdate: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsString()
  profile_photo: string;
}
