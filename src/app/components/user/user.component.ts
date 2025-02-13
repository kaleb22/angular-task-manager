import { Component, computed, input, output } from '@angular/core';

import { User } from '../../interfaces/user.interface';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-user',
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user = input.required<User>();
  selected = input.required<boolean>();

  select = output<User>();

  imagePath = computed(() => `/users/${this.user().avatar}`);

  onSelectUser() {
    this.select.emit(this.user());
  }
}
