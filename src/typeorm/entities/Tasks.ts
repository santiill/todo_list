import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tasks'})
export class Task {
  @PrimaryGeneratedColumn({type: 'bigint'})
  id: number;

  @Column()
  title: string;

  @Column({nullable: true})
  description: string;

  @Column({default: false})
  completed: boolean;
}