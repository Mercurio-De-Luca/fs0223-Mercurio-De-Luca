import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post-inattivi',
  templateUrl: './post-inattivi.component.html',
  styleUrls: ['./post-inattivi.component.scss']
})
export class PostInattiviComponent {
  postArray: Post[] = [];


  constructor(private postSvc: PostService){

    this.postSvc.getPost().then(post => {
      this.postArray = post.filter(p => !p.active)
    })
}
}
