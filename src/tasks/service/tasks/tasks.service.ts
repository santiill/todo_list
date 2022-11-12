import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "../../../typeorm/entities/Tasks";
import { CreateTaskParams, UpdateTaskParams } from "../../../utils/types";

@Injectable()
export class TasksService {

  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>){}

  getTasks(){
    return this.taskRepository.find({order: {id: "ASC" }})
  }

  getTaskById(id: number){
    return this.taskRepository.findOneBy({id})
  }

  async createTask(createTaskDetails: CreateTaskParams){
    const task = this.taskRepository.create({...createTaskDetails})
    return this.taskRepository.save(task)
  }

  updateTask(id: number, updateTaskDetails: UpdateTaskParams){
    return this.taskRepository.update({id}, {...updateTaskDetails})
  }

  deleteTask(id: number){
    return this.taskRepository.delete({id})
  }
}
