import { Injectable } from '@angular/core';
import { ITodo } from './Models/itodo';
import { Todo } from './Models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiURL: string = 'http://localHost:3000/todo';

  allTodos: ITodo[] = [];


  constructor() { }

  getTod(): Promise<ITodo[]> {
    return fetch(this.apiURL).then(response => response.json());
  }

  addTodo(todo: ITodo): Promise<ITodo> {
    return fetch(this.apiURL,{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(todo)
    }).then(response => response.json());
  }
  deleteTodo(id: number = 0) {
    return fetch(this.apiURL + '/' + id,{
      method: 'DELETE',
    }).then(response => response.json());
  }

  modTodo(id: number = 0): Promise<ITodo> {
    return fetch(this.apiURL + '/' + id,{
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(id)
    }).then(response => response.json());
  }
}
