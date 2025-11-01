import {
  Entity,
  PrimaryKey,
  Property,
  ManyToOne,
  ManyToMany,
  Collection,
} from '@mikro-orm/core';
import { Tag } from './tag.entity';
import { User } from './user.entity';

@Entity({ tableName: 'posts' })
export class Post {
  @PrimaryKey()
  id!: number;

  @Property()
  title!: string;

  @Property()
  content!: string;

  @ManyToOne(() => User)
  user!: User;

  @ManyToMany(() => Tag, (tag) => tag.posts, { owner: true })
  tags = new Collection<Tag>(this);
}
