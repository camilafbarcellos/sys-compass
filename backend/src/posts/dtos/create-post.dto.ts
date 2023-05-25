import {
    IsInt, IsString, IsArray, MaxDate,
    IsDate, IsNotEmpty, IsOptional, Min
} from 'class-validator';
import { Comment } from '../../comments/comment.entity';

export class CreatePostDto {

    @IsNotEmpty()
    @IsString()
    user: string;

    @IsOptional()
    @IsDate()
    @MaxDate(new Date())
    post_date?: Date;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsOptional()
    @IsInt()
    @Min(0)
    likes?: number;

    @IsOptional()
    @IsArray()
    comments?: Comment[];

    @IsOptional()
    @IsString()
    url_image?: string;
}
