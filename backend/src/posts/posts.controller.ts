import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  NotFoundException,
  Param,
  Delete,
  Put
} from '@nestjs/common';
import { CreatePostDto } from './dtos/create-post.dto';
import { PostsService } from './posts.service';
import { UpdatePostDto } from './dtos/update-post.dto';
import { CommentsService } from '../comments/comments.service';
import { CreateCommentDto } from 'src/comments/dtos/create-comment.dto';
import { UpdateCommentDto } from 'src/comments/dtos/update-comment.dto';

@Controller('posts')
export class PostsController {
  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService) { }

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

  @Put(':id')
  async updatePost(@Param('id') id: string, @Body() postUpdated: UpdatePostDto) {
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

  @Post(':id/comments')
  async createPostComment(@Param('id') id: string, @Body() comment: CreateCommentDto) {
    return this.commentsService.create(id, comment);
  }

  @Get(':id/comments')
  async getPostComments(@Param('id') id: string) {
    return this.commentsService.findAll(id);
  }

  @Get(':id/comments/:comment_id')
  async getPostComment(@Param('id') id: string, @Param('comment_id') commentId: number) {
    return this.commentsService.findOne(id, commentId);
  }

  @Put(':id/comments/:comment_id')
  async updatePostComment(@Param('id') id: string, @Param('comment_id') commentId: number,
    @Body() comment: UpdateCommentDto) {
    return this.commentsService.update(id, commentId, comment);
  }

  @Delete(':id/comments/:comment_id')
  async deletePostComment(@Param('id') id: string, @Param('comment_id') commentId: number) {
    return this.commentsService.delete(id, commentId);
  }
}
