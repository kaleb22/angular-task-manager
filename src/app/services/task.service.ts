import { Injectable } from '@angular/core';

import { DUMMY_TASKS } from '../constants/dummy-tasks';
import { NewTask, Task } from '../interfaces/task.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = DUMMY_TASKS as Task[];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

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
    this.saveTasks();
  }

  delete(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
