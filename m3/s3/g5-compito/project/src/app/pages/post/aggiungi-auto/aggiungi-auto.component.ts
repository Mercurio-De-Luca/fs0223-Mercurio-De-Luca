import { Component } from '@angular/core';
import { IAuto } from '../iauto';
import { AutoService } from '../auto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi-auto',
  templateUrl: './aggiungi-auto.component.html',
  styleUrls: ['./aggiungi-auto.component.scss']
})
export class AggiungiAutoComponent {

aggAuto:IAuto[] = [];
data: Partial <IAuto> = {
  marca: '',
  prezzo: 0
}

constructor(
  private autoSvc: AutoService,
  private router: Router,
){}


creaAuto(){
  this.autoSvc.aggAuto(this.data).subscribe(data => this.aggAuto.push(data))
  this.router.navigate(['/post'])
}


}
