import {
  Entity,
  PrimaryKey,
  Property,
  ManyToMany,
  Collection,
} from '@mikro-orm/core';
import { Post } from './post.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ tableName: 'tags' })
export class Tag {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  name!: string;

  @Field(() => [Post])
  @ManyToMany(() => Post, (post) => post.tags)
  posts = new Collection<Post>(this);
}
