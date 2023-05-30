import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    btnA: string = 'Vai a post attivi';
    btnI: string = 'Vai a post inattivi';

}
