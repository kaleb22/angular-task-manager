import { Injectable } from '@angular/core';

import { DUMMY_TASKS } from '../constants/dummy-tasks';
import { NewTask, Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = DUMMY_TASKS as Task[];

  getUserTask(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  add(newTask: NewTask, userId: string) {
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.date,
    });
  }

  delete(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }
}
