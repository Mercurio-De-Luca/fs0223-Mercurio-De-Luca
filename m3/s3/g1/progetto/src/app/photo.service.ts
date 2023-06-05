import { IPhotos } from './Models/iphotos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photos } from './Models/photos';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  apiURL: string = 'https://jsonplaceholder.typicode.com/photos'

  constructor(private http:HttpClient) { }

  getPhotos(){
    return this.http.get<Photos[]>(this.apiURL)
  }

  getPhoto(id:number){
    return this.http.get<Photos[]>(this.apiURL + '/' + id)
  }
  deletePhotos(id: number){
    return this.http.delete(this.apiURL + '/' + id)
  }
}
