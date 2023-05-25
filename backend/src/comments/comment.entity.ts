import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('comments')
export class Comment {
  @PrimaryColumn()
  id: number;

  @Column()
  user: string;

  @Column()
  comment: string;

  constructor(comment?: Partial<Comment>) {
    Object.assign(this, comment);
  }
}
