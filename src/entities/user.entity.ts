import {
  Entity,
  PrimaryKey,
  Property,
  OneToOne,
  OneToMany,
  Collection,
} from '@mikro-orm/core';
import { Post } from './post.entity';
import { Profile } from './profile.entity';

@Entity({ tableName: 'users' })
export class User {
  @PrimaryKey()
  id!: string;

  @Property()
  username!: string;

  @Property()
  email!: string;

  @Property({ nullable: true })
  role?: string;

  @OneToOne(() => Profile, (profile) => profile.user, { nullable: true })
  profile?: Profile;

  @OneToMany(() => Post, (post) => post.user)
  posts = new Collection<Post>(this);
}
