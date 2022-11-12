import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TasksService } from "../../service/tasks/tasks.service";
import { CreateTaskDto } from "../../dto/CreateTask.dto";
import { UpdateTaskDto } from "../../dto/UpdateTask.dto";

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {}

  @Get()
  getTasks(){
    return this.taskService.getTasks()
  }

  @Get(':id')
  getTaskById(@Param('id', ParseIntPipe) id: number){
    return this.taskService.getTaskById(id)
  }

  @Post()
  async createTask(@Body() createTask: CreateTaskDto){
    const created_task = await this.taskService.createTask(createTask)
    return created_task
  }

  @Put(':id')
  async updateTask(@Param('id', ParseIntPipe) id: number, @Body() updateTaskDto: UpdateTaskDto){
    await this.taskService.updateTask(id, updateTaskDto)
    const updated_task = await this.taskService.getTaskById(id)
    return updated_task
  }

  @Delete(':id')
  deleteTask(@Param('id', ParseIntPipe) id: number){
    this.taskService.deleteTask(id)
  }
}
