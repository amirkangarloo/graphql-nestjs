import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { SqliteDriver } from '@mikro-orm/sqlite';
import * as entities from 'src/entities';

@Module({
  imports: [
    MikroOrmModule.forRoot({
      driver: SqliteDriver,
      dbName: 'sqlite-database.db',
      autoLoadEntities: true,
    }),
    MikroOrmModule.forFeature([...Object.values(entities)]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
