import { Component, OnInit } from '@angular/core';
import { IAuto } from './iauto';
import { AutoService } from './auto.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{

auto: IAuto[] = [];
loading: boolean = true;



constructor(
  private autoSvc: AutoService,
  private router: Router,
  private authSvc: AuthService
  ){}


  ngOnInit(){
    this.autoSvc.getAuto().subscribe(data => {
      this.auto = data;
      this.loading = false
    });
  }

  delete(id:number){
    this.autoSvc.eliminaAuto(id).subscribe(data =>
      {let index = this.auto.findIndex(p => p.id == id)
      this.auto.splice(index,1)})
      }

   logout(){
    this.authSvc.logout()
   }
}
