import { ITodo } from "./itodo";

export class Todo implements ITodo{
  id?:number;
  title: string;
  completed: boolean;

  constructor(title:string, completed:boolean,id?:number){
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
