import { IsOptional, IsString } from 'class-validator';

export class UpdateCommentDto {

    @IsOptional()
    @IsString()
    user?: string;

    @IsOptional()
    @IsString()
    comment?: string;
}
