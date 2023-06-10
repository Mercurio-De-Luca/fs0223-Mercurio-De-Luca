import { Component, OnInit } from '@angular/core';
import { IAuto } from './iauto';
import { AutoService } from './auto.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

auto: IAuto[] = [];



constructor(
  private autoSvc: AutoService
  ){}


  ngOnInit(){
    this.autoSvc.getAuto().subscribe(data => this.auto = data);
  }

  delete(id:number){
    this.autoSvc.eliminaAuto(id).subscribe(data =>
      {let index = this.auto.findIndex(p => p.id == id)
      this.auto.splice(index,1)})
      }
}
