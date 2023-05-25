import {
    IsInt, IsString, IsArray,
    IsDate, IsOptional, MaxDate, Min
} from 'class-validator';

export class UpdatePostDto {

    @IsOptional()
    @IsString()
    user?: string;

    @IsOptional()
    @IsDate()
    @MaxDate(new Date())
    post_date?: Date;

    @IsOptional()
    @IsString()
    description?: string;

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
