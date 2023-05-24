import { Column, ObjectId, Entity, ObjectIdColumn } from 'typeorm';

@Entity('users')
export class User {
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
  password: string;

  @Column({default: 'https://lexq.us/wp-content/uploads/2019/07/user-pic.jpg'})
  profile_photo?: string;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
