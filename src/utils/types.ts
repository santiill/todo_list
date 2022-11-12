export type CreateTaskParams = {
  title: string;
  description: string;
}

export type UpdateTaskParams = {
  title: string;
  description: string;
  completed: boolean;
}