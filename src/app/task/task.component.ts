import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ITask } from '../itask'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() user: User | undefined;

  todos: any;
  newTodo: string | undefined;
  todoObj: any;


  constructor(
    //private http: HttpClient,
  ) {
    this.newTodo = '';
    this.todos = [];
  }

  addTodo(event: { preventDefault: () => void; }) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    }
    this.todos.push(this.todoObj);
    this.newTodo = '';
    event.preventDefault();
    /*const headers = new HttpHeaders({
     // Authorization: user.token,
    });
    this.http
      .post<ITask>(
        '${config.api.API_FULL_URL}/api/tasks/add-task',
        form.value,
        { headers }
      )*/
  }

  deleteTodo(index: any) {
    this.todos.splice(index, 1)
  }

  ngOnInit(): void {
  }

}
