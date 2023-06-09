import { Component } from '@angular/core';
import { ILoginData } from '../interface/ilogin-data';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  data: ILoginData ={
    email: '',
    password: ''
  }

  constructor(
    private authSvc: AuthService
  ){}


  login(){
    this.authSvc.login(this.data)
    .subscribe(user => {
      alert(`Sei loggato come ${user.user.nome}`)
    })
  }

}
