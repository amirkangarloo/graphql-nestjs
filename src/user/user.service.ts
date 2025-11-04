import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
// Entities
import { User } from 'src/entities';
// Repositories
import { UserRepository } from 'src/repositories';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: UserRepository,
  ) {}

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.findAll({
      populate: ['profile', 'posts'],
    });

    return users;
  }
}
