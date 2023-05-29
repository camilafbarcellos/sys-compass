import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Post as PostEntity } from '../posts/post.entity';
import { Comment } from '../comments/comment.entity';
import { PostsService } from '../posts/posts.service';
import { CreateCommentDto } from './dtos/create-comment.dto';
import { UpdateCommentDto } from './dtos/update-comment.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class CommentsService {
    constructor(
        @InjectRepository(PostEntity) private postsRepository: MongoRepository<PostEntity>,
        private postsService: PostsService) { }

    async create(id: string, commentDto: CreateCommentDto) {
        const post = await this.postsService.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        if (!post.comments) {
            post.comments = [];
        }

        const comment = new Comment(commentDto);
        comment.id = new Date().getTime().toString();
        post.comments.push(comment);
        Object.assign(post, post);             

        return this.postsRepository.save(post);
    }

    async findAll(id: string): Promise<Comment[]> {
        const post = await this.postsService.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        if (!post.comments) {
            throw new BadRequestException('Comments not found');
        }

        return post.comments;
    }

    async findOne(id: string, commentId: string): Promise<Comment> {
        const post = await this.postsService.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        
        const comment = post.comments.find(c => c.id == commentId);

        if (!post.comments || !comment) {
            throw new BadRequestException('Comment not found');
        }

        return comment;
    }

    async update(id: string, commentId: string, commentDto: UpdateCommentDto) {
        const post = await this.postsService.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        
        const comment = post.comments.find(c => c.id == commentId);

        if (!post.comments || !comment) {
            throw new BadRequestException('Comment not found');
        }

        Object.assign(comment, commentDto);
        post.comments[post.comments.findIndex(c => c.id == commentId)] = comment;
        Object.assign(post, post);             

        return this.postsRepository.save(post);
    }

    async delete(id: string, commentId: string) {
        const post = await this.postsService.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }
        
        const comment = post.comments.find(c => c.id == commentId);

        if (!post.comments || !comment) {
            throw new BadRequestException('Comment not found');
        }

        post.comments = post.comments.filter(c => c.id !== commentId);
        Object.assign(post, post);             

        return this.postsRepository.save(post);
    }
}
