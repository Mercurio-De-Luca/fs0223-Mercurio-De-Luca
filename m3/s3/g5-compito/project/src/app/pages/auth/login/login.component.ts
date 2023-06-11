import { Component } from '@angular/core';
import { ILoginData } from '../interface/ilogin-data';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form!: FormGroup

  // data: ILoginData ={
  //   email: '',
  //   password: ''
  // }

  constructor(
    private authSvc: AuthService,
    private router: Router
  ){}

  ngOnInit(){
    this.form = new FormGroup({
      email: new FormControl(null),
      password: new FormControl(null),
    });
  }

  login(){
    this.authSvc.login(this.form.value)
    .subscribe(user => {
      this.router.navigate(['/post'])
    })
  }

}
