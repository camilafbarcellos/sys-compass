import { Column, ObjectId, Entity, ObjectIdColumn } from 'typeorm';
import { Exclude, Transform } from 'class-transformer'

@Entity('users')
export class User {
  @Transform(({ value }) => value.toString())
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column()
  user: string;

  @Column()
  birthdate: Date;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  profile_photo?: string = 'https://lexq.us/wp-content/uploads/2019/07/user-pic.jpg';

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
