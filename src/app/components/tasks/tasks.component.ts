import { Component, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../../constants/dummy-tasks';
import { Task } from '../../interfaces/task.interface';
import { NewTaskComponent } from './new-task/new-task.component';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  tasks = DUMMY_TASKS as Task[];
  showNewTask = false;

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }

  onClose() {
    this.showNewTask = false;
  }

  onAddTask() {
    this.showNewTask = true;
  }

  onCompleteTask(task: Task) {
    const taskIndex = this.tasks.indexOf(task);
    this.tasks.splice(taskIndex, 1);
  }
}
