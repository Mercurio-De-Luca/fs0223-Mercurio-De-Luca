import { AutoService } from './../auto.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuto } from '../iauto';

@Component({
  selector: 'app-modifica-auto',
  templateUrl: './modifica-auto.component.html',
  styleUrls: ['./modifica-auto.component.scss']
})
export class ModificaAutoComponent {

  auto:Partial <IAuto> = {
    marca: '',
    prezzo: 0
  }

  constructor(
    private autoSvc: AutoService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(){
    this.route.params.subscribe((params: any) => {
      this.autoSvc.getMacchina(params.id).subscribe((auto) => {
        this.auto = auto
      })
    })



  }

  modificaAuto(){
    this.autoSvc.modifica(this.auto)
    .subscribe((dato)=>{
      this.router.navigate(['/post'])
    })
  }
}
