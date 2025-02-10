import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { DUMMY_USERS } from './constants/dummy-users';
import { User } from './interfaces/user';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-task-manager';

  users = DUMMY_USERS as User[];
  userSelected?: User;

  onSelectUser(user: User) {
    this.userSelected = user;
  }
}
