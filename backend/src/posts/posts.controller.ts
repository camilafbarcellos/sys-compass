import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  NotFoundException,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './dtos/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) { }

  @Post()
  async createPost(@Body() post: CreatePostDto) {
    return this.postsService.create(post);
  }

  @Get()
  async getPosts() {
    return await this.postsService.findAll();
  }

  @Get(':id')
  async getPost(@Param('id') id: string) {      
    const post = await this.postsService.findOne(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }
    
    return post;
  }

  @Patch(':id')
  async updateUser(@Param('id') id: string, @Body() postUpdated: UpdatePostDto) {
    const post = await this.postsService.findOne(id);
    if (!post) {
      throw new NotFoundException('Post not found');
    }

    return this.postsService.update(id, postUpdated);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    return this.postsService.remove(id);
  }

  @Get(':id/comments')
  async getPostComments(@Param('id') id: string) {
    return this.postsService.findAllComments(id);
  }

  @Get(':id/comments:comment_id')
  async getPostComment(@Param('id') id: string, commentId: string) {
    return this.postsService.findOneComment(id, commentId);
  }
}
