import { Comment } from 'src/comments/comment.entity';
import { Entity, ObjectId, ObjectIdColumn, Column } from 'typeorm';

@Entity('posts')
export class Post {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  user: string;

  @Column()
  post_date: Date = new Date();

  @Column()
  description: string;

  @Column()
  likes: number = 0;

  @Column()
  comments?: Comment[];

  @Column()
  url_image?: string;

  constructor(post?: Partial<Post>) {
    Object.assign(this, post);
  }
}
