import { Injectable } from '@angular/core';
import { Post } from './Models/post';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  apiURL: string = '../assets/db.json';

  allPost: Post[] = [];

  getAllPost(): Promise<Post[]>{
    return fetch(this.apiURL)
    .then((res) => res.json())
    .then((data) => (this.allPost = data));
  }

  getActivePosts(): Post[] {
    return this.allPost.filter((obj) => obj.active)
  }
  getInactivePosts(): Post[] {
    return this.allPost.filter((obj) => !obj.active)
  }
}
