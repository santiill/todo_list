import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { DB_ENTITIES } from "./utils/db_entities";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'todo_list',
    entities: DB_ENTITIES,
    synchronize: true,
  }), TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
