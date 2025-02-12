import { Component, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../../constants/dummy-tasks';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  tasks = DUMMY_TASKS as Task[];

  get userTasks() {
    return this.tasks.filter((task) => task.userId === this.userId());
  }
}
