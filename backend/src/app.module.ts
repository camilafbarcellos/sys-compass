import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './posts/post.entity';
import { User } from './users/user.entity';
import { Comment } from './comments/comment.entity';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 27017,
      // username: process.env.DB_USERNAME,
      // password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE || 'sys-compass',
      // url: 'mongodb://localhost:27017',
      // database: 'sys-compass',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      autoLoadEntities: true,
      ssl: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
    TypeOrmModule.forFeature([Post, User, Comment]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
