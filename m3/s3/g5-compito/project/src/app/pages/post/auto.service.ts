import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { IAuto } from './iauto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  apiAuto = environment.urlAuto

constructor(
private http: HttpClient
) { }

getAuto(){
  return this.http.get<IAuto[]>(this.apiAuto)
}

aggAuto(data: Partial<IAuto>){
  return this.http.post<IAuto>(this.apiAuto,data);
}

eliminaAuto(id: number){
  return this.http.delete(this.apiAuto + '/' + id);
}

}
