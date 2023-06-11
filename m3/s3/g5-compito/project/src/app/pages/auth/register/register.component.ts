import { IRegisterData } from './../interface/iregister-data';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form!: FormGroup

  // data: IRegisterData = {
  //   nome: '',
  //   cognome: '',
  //   email: '',
  //   password: ''
  // };


  constructor(
    private authSvc: AuthService,
    private router: Router
    ){}


    ngOnInit(){
      this.form = new FormGroup({
        nome: new FormControl(null, Validators.required),
        cognome: new FormControl(null, Validators.required),
        email: new FormControl(null,  Validators.required),
        password: new FormControl(null,  Validators.required),
      });
    }


  // reg(){
  //   this.authSvc.register(this.data).subscribe(user => this.router.navigate(['/post']))
  // }

    onSubmit(){
      this.authSvc.register(this.form.value).subscribe(user => this.router.navigate(['/post']))
    }

}
