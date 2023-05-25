import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCommentDto {

    @IsNotEmpty()
    @IsString()
    user: string;

    @IsNotEmpty()
    @IsString()
    comment: string;
}
