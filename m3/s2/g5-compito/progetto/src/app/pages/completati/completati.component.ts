import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/Models/itodo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.component.html',
  styleUrls: ['./completati.component.scss']
})
export class CompletatiComponent implements OnInit{


  todos: ITodo[] = [];
  loading:boolean = true;



  constructor(private todoSvc: TodoService){}

  ngOnInit(){
    setTimeout(() => {
      this.getTodo();
      this.loading = false
      },2000);
  }

  getTodo(){
    this.todoSvc.getTod().then(todo => this.todos = todo);
  }

}
