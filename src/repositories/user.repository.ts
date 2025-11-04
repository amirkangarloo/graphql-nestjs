import { User } from 'src/entities';
import { EntityRepository } from '@mikro-orm/sqlite';

export class UserRepository extends EntityRepository<User> {}
