import { Component, input, output } from '@angular/core';

import { Task } from '../../../interfaces/task.interface';
import { CardComponent } from '../../card/card.component';

@Component({
  selector: 'app-task',
  imports: [CardComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
  complete = output<Task>();

  onComplete() {
    this.complete.emit(this.task());
  }
}
