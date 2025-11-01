// mikro-orm.config.ts
import { defineConfig } from '@mikro-orm/sqlite';
import { SqliteDriver } from '@mikro-orm/sqlite';
import { User } from './src/entities/user.entity';
import { Profile } from './src/entities/profile.entity';
import { Post } from './src/entities/post.entity';
import { Tag } from './src/entities/tag.entity';

export default defineConfig({
  driver: SqliteDriver,
  dbName: 'sqlite-database.db',
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  debug: true,
});
