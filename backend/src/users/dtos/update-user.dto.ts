import { Transform } from 'class-transformer';
import {
  IsOptional, IsEmail,
  IsString, IsDate, MaxDate
} from 'class-validator';

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

export class UpdateUserDto {

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  user?: string;

  @IsOptional()
  @IsDate()
  @Transform(({ value }) => new Date(value))
  @MaxDate(yesterday)
  birthdate?: Date;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  password?: string;

  @IsOptional()
  @IsString()
  profile_photo?: string;
}
