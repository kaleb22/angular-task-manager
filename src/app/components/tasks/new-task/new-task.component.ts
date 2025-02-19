import { Component, inject, input, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TaskService } from '../../../services/task.service';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule, ButtonComponent],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss',
})
export class NewTaskComponent {
  private taskService = inject(TaskService);

  userId = input.required<string>();
  close = output<void>();

  title = signal('');
  summary = signal('');
  date = signal('');

  onSubmit() {
    this.taskService.add(
      {
        title: this.title(),
        summary: this.summary(),
        date: this.date(),
      },
      this.userId(),
    );
    this.onClose();
  }

  onClose() {
    this.close.emit();
  }
}
