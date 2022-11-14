import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe
} from "@nestjs/common";
import { TasksService } from "../../service/tasks/tasks.service";
import { CreateTaskDto } from "../../dto/CreateTask.dto";
import { UpdateTaskDto } from "../../dto/UpdateTask.dto";

@Controller('tasks')
export class TasksController {

  constructor(private taskService: TasksService) {}

  @Get()
  async getTasks(){
    return await this.taskService.getTasks()
  }

  @Get(':id')
  async getTaskById(@Param('id', ParseIntPipe) id: number){
    return await this.taskService.getTaskById(id)
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async createTask(@Body() createTask: CreateTaskDto){
    return await this.taskService.createTask(createTask)
  }

  @Put(':id')
  async updateOne(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return await this.taskService.updateTask(id, updateTaskDto)
  }

  @Delete(':id')
  async deleteTask(@Param('id', ParseIntPipe) id: number){
    await this.taskService.deleteTask(id)
  }
}
