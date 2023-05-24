import { Transform } from 'class-transformer';
import {
  IsNotEmpty, IsOptional, IsEmail,
  IsString, IsDate, MaxDate
} from 'class-validator';

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);
export class CreateUserDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @MaxDate(yesterday)
  birthdate: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsOptional()
  @IsString()
  profile_photo?: string;
}
