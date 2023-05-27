import { IsString } from 'class-validator';

export class AuthLoginDto {
    @IsString()
    user: string;

    @IsString()
    password: string;
}