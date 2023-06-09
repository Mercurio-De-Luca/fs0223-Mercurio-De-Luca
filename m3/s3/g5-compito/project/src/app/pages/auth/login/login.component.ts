import { Component } from '@angular/core';
import { ILoginData } from '../interface/ilogin-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


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
    private authSvc: AuthService,
    private router: Router
  ){}


  login(){
    this.authSvc.login(this.data)
    .subscribe(user => {
      this.router.navigate(['/post'])
    })
  }

}
