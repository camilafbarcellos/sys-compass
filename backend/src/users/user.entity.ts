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
  birthdate: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  profile_photo: string;

  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}
