import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { DB_CONFIG } from './utils/db_config';
import { DB_ENTITIES } from "./utils/db_entities";

@Module({
  imports: [TypeOrmModule.forRoot(DB_CONFIG), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
