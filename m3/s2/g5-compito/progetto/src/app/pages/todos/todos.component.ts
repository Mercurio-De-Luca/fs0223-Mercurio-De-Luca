import { ITodo } from './../../Models/itodo';
import { Component } from '@angular/core';
import { Todo } from 'src/app/Models/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {

  todos: ITodo[] = [];
  todo:Todo = new Todo('',true);
  svuotaInput:string = '';
  loading:boolean = true;



  constructor(private todoSvc: TodoService){}

  ngOnInit(){
    setTimeout(() => {
    this.getTodo();
    this.loading = false
    },2000);
  }

  creaTodo(){
    if(this.svuotaInput == ''){
      this.svuotaInput = 'Inserisci todo'
    }else{
    this.todoSvc.addTodo(this.todo)
    .then(res => this.todoSvc.getTod().then(todo => this.todos = todo));
    this.svuotaInput = '';
    }
  }

  deleteTodo(id?:number){
    this.todoSvc.deleteTodo(id)
    .then(res =>{
      this.todoSvc.getTod().then(todo => this.todos = todo);
    })
  }

  modTod(id?: number){
      this.todoSvc.modTodo(id).then((res) => {
        this.getTodo()
      })
  }


  getTodo(){
    this.todoSvc.getTod().then(todo => this.todos = todo);
  }
}
