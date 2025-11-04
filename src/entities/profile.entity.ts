import { Entity, PrimaryKey, Property, OneToOne } from '@mikro-orm/core';
import { User } from './user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity({ tableName: 'profiles' })
export class Profile {
  @Field(() => Int)
  @PrimaryKey()
  id!: number;

  @Field(() => String)
  @Property()
  bio!: string;

  @Field(() => String)
  @Property()
  avatar!: string;

  @Field(() => User)
  @OneToOne(() => User, (user) => user.profile, { owner: true })
  user!: User;
}
