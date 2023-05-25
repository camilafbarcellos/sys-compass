import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { Post as PostEntity } from './post.entity';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { ObjectId } from 'mongodb';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(PostEntity) private postsRepository: MongoRepository<PostEntity>) { }

    create(postDto: CreatePostDto) {
        const post = this.postsRepository.create(postDto);

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

        Object.assign(post, postDto);
        
        return this.postsRepository.save(post);
    }

    async remove(id: string) {
        const post = await this.findOne(id);
        if (!post) {
            throw new NotFoundException('Post not found');
        }

        return this.postsRepository.remove(post);
    }
}
