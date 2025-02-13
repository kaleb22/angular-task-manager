import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { type NewTask } from '../../../interfaces/task.interface';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  close = output<void>();
  add = output<NewTask>();

  title = signal('');
  summary = signal('');
  date = signal('');

  onSubmit() {
    this.add.emit({
      title: this.title(),
      summary: this.summary(),
      date: this.date(),
    });
    this.close.emit();
  }

  onClose() {
    this.close.emit();
  }
}
