import { Component } from '@angular/core';
import { IRegisterData } from '../interface/iregister-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  data: IRegisterData = {
    nome: '',
    cognome: '',
    email: '',
    password: ''
  };

  constructor(
    private authSvc: AuthService,
    private router: Router
    ){}

  register(){
    this.authSvc.register(this.data).subscribe(user => this.router.navigate(['/post']))
  }

}
