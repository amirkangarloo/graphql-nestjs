import {
  Entity,
  PrimaryKey,
  Property,
  OneToOne,
  OneToMany,
  Collection,
  EntityRepositoryType,
} from '@mikro-orm/core';
import { Post } from './post.entity';
import { Profile } from './profile.entity';
import { UserRepository } from '../repositories';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ tableName: 'users', repository: () => UserRepository })
export class User {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  username!: string;

  @Field(() => String)
  @Property()
  email!: string;

  @Field(() => String, { nullable: true })
  @Property({ nullable: true })
  role?: string;

  @Field(() => Profile, { nullable: true })
  @OneToOne(() => Profile, (profile) => profile.user, { nullable: true })
  profile?: Profile;

  @Field(() => [Post])
  @OneToMany(() => Post, (post) => post.user)
  posts = new Collection<Post>(this);

  [EntityRepositoryType]?: UserRepository;
}
