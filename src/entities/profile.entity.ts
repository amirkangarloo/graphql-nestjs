import { Entity, PrimaryKey, Property, OneToOne } from '@mikro-orm/core';
import { User } from './user.entity';

@Entity({ tableName: 'profiles' })
export class Profile {
  @PrimaryKey()
  id!: number;

  @Property()
  bio!: string;

  @Property()
  avatar!: string;

  @OneToOne(() => User, (user) => user.profile, { owner: true })
  user!: User;
}
