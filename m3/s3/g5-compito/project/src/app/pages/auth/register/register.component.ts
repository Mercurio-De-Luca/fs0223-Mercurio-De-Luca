import { Component } from '@angular/core';
import { IRegisterData } from '../interface/iregister-data';
import { AuthService } from '../auth.service';

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

  constructor(private authSvc: AuthService){}

  register(){
    this.authSvc.register(this.data).subscribe(user => alert(user.user.nome))
  }

}
