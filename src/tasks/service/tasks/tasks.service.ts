import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task } from "../../../typeorm/entities/Tasks";
import { CreateTaskParams, UpdateTaskParams } from "../../../utils/types";

@Injectable()
export class TasksService {

  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>){}

  async getTasks(){
    return await this.taskRepository.find({order: {id: "ASC" }})
  }

  async getTaskById(id: number){
    const task = await this.taskRepository.findOneBy({id})
    if(!task){
      throw new NotFoundException();
    }
    return task
  }

  async createTask(createTaskDetails: CreateTaskParams){
    const task = this.taskRepository.create({...createTaskDetails})
    return this.taskRepository.save(task)
  }

  async updateTask(id: number, updateTaskDetails: UpdateTaskParams) {
    const task = await this.getTaskById(id);
    const changes = Object.assign(task, updateTaskDetails);
    return this.taskRepository.save(changes);
  }

  async deleteTask(id: number){
    const task = await this.getTaskById(id);
    return await this.taskRepository.delete(task)
  }
}
