import { Args, Int, Query, Resolver } from '@nestjs/graphql';
// Services
import { UserService } from 'src/user/user.service';
// Entities
import { User } from 'src/entities';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'findAllUsers' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Query(() => User, { name: 'findUserById', nullable: true })
  async findById(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<User | null> {
    return await this.userService.findById(id);
  }
}
