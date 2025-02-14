import { Component, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Task } from '../../../interfaces/task.interface';
import { CardComponent } from '../../card/card.component';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  private taskService = inject(TaskService);

  task = input.required<Task>();

  onComplete() {
    this.taskService.delete(this.task());
  }
}
