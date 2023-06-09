import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, tap} from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IAccessData } from './interface/iaccess-data';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IRegisterData } from './interface/iregister-data';
import { ILoginData } from './interface/ilogin-data';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  jwtHelper: JwtHelperService = new JwtHelperService();

  apiUrl = environment.url

  private authSubject = new BehaviorSubject<null | IAccessData>(null);

  user$ = this.authSubject.asObservable();
  isLoggedIn$ = this.user$.pipe(map(dato => !!dato))



  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.restoreUser
   }


    register(data: FormGroup){
      return this.http.post<IAccessData>(this.apiUrl + '/register',data)
    }

    login(data: ILoginData){
      return this.http.post<IAccessData>(this.apiUrl + '/login', data).pipe(tap(data => {
        this.authSubject.next(data);
        localStorage.setItem('user',JSON.stringify(data))
        const dataScadenza = this.jwtHelper.getTokenExpirationDate(data.accessToke) as Date ;
      }))
    }

    restoreUser(){
      const userJson = localStorage.getItem('user');
      if(!userJson){
        return
      }
      const user:IAccessData = JSON.parse(userJson)
      if(this.jwtHelper.isTokenExpired(user.accessToke)){
        return
      }
      this.authSubject.next(user)
    }

    logout(){
      this.authSubject.next(null);
      localStorage.removeItem('user');
      this.router.navigate(['/auth']);
    }
  }

