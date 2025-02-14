import { Component, inject, input } from '@angular/core';

import { TaskComponent } from './task/task.component';
import { DUMMY_TASKS } from '../../constants/dummy-tasks';
import { NewTask, Task } from '../../interfaces/task.interface';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  userId = input.required<string>();
  name = input.required<string>();

  private taskService = inject(TaskService);

  tasks = DUMMY_TASKS as Task[];
  showNewTask = false;

  get userTasks() {
    return this.taskService.getUserTask(this.userId());
  }

  onClose() {
    this.showNewTask = false;
  }

  onAddTask() {
    this.showNewTask = true;
  }
}
