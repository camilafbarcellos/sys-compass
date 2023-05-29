import { Transform } from 'class-transformer';
import { Entity, Column, ObjectIdColumn, ObjectId } from 'typeorm';
import { ObjectId as MongoObjectId } from 'mongodb';

@Entity('comments')
export class Comment {

  @Transform(({ value }) => value.toString())
  @ObjectIdColumn()
  id: ObjectId = new MongoObjectId();

  @Column()
  user: string;

  @Column()
  comment: string;

  constructor(comment?: Partial<Comment>) {
    Object.assign(this, comment);
  }
}
