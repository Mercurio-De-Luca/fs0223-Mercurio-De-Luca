import { Injectable } from '@angular/core';
import { Post } from './Models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiURL: string = 'assets/db.json';


}
