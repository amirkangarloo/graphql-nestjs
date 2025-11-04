import { defineConfig } from '@mikro-orm/sqlite';
import { SqliteDriver } from '@mikro-orm/sqlite';

export default defineConfig({
  driver: SqliteDriver,
  dbName: 'sqlite-database.db',
  entities: ['./dist/entities'],
  entitiesTs: ['./src/entities'],
  debug: true,
});
