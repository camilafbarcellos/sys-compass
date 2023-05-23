import {
    IsNumber, IsString, IsArray, MinDate,
    IsDate, MaxDate, IsNotEmpty, IsOptional
} from 'class-validator';

export class UpdatePostDto {

    @IsNotEmpty()
    @IsString()
    user: string;

    @IsNotEmpty()
    // @IsDate()
    // @MinDate(new Date())
    // @MaxDate(new Date())
    post_date: Date;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    likes: number;

    @IsOptional()
    @IsArray()
    comments?: [];

    @IsOptional()
    @IsString()
    url_image?: string;
}
