import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { TaskComponent } from '../task/task.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  USERS: User[] = [
    { id: 1, name: 'USERS 1', task: new TaskComponent },
    { id: 2, name: 'USERS 2', task: new TaskComponent },
    { id: 3, name: 'USERS 3', task: new TaskComponent },
    { id: 4, name: 'USERS 4', task: new TaskComponent },
    { id: 5, name: 'USERS 5', task: new TaskComponent },
    { id: 6, name: 'USERS 6', task: new TaskComponent },
    { id: 7, name: 'USERS 7', task: new TaskComponent }
  ];

  selectedUser: User | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(user: User):void {
    let me = this;
    me.selectedUser = user;
  }

}
