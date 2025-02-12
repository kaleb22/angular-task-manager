import { Component, input } from '@angular/core';
import { Task } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  task = input.required<Task>();
}
