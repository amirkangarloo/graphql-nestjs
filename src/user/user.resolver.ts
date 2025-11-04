import { Query, Resolver } from '@nestjs/graphql';
// Services
import { UserService } from 'src/user/user.service';
// Entities
import { User } from 'src/entities';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User], { name: 'users' })
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
