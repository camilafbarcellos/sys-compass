import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Post as PostEntity } from './post.entity';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { ObjectId } from 'mongodb';
import { Comment } from 'src/comments/comment.entity';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(PostEntity) private postsRepository: MongoRepository<PostEntity>) { }

    create(postDto: CreatePostDto) {
        const post = this.postsRepository.create(postDto);
        post.likes = 0;
        post.post_date = new Date();

        return this.postsRepository.save(post);
    }

    findAll(): Promise<PostEntity[]> {
        return this.postsRepository.find();
    }

    findOne(id: string): Promise<PostEntity> {
        return this.postsRepository.findOneBy({ _id: new ObjectId(id) });
    }

    async update(id: string, postDto: UpdatePostDto) {
        const post = await this.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        return this.postsRepository.update(id, postDto);
    }

    async remove(id: string) {
        const post = await this.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        return this.postsRepository.remove(post);
    }

    async findAllComments(id: string): Promise<Comment[]> {
        const post = await this.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        if (!post.comments) {
            throw new BadRequestException('Comments not found');
        }

        return post.comments;
    }

    async findOneComment(id: string, commentId: string): Promise<Comment> {
        const post = await this.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        if (!post.comments) {
            throw new BadRequestException('Comments not found');
        }

        const comment = post.comments.find(c => c.id === new ObjectId(commentId));

        return comment;
    }
}
