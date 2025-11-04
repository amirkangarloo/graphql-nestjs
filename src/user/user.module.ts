import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
// Services
import { UserService } from './user.service';
// Resolvers
import { UserResolver } from './user.resolver';
// Entities
import { User } from 'src/entities';

@Module({
  imports: [MikroOrmModule.forFeature([User])],
  providers: [UserResolver, UserService],
})
export class UserModule {}
