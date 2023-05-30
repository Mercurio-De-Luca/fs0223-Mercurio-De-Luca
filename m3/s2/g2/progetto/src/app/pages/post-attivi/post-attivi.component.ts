import { Component } from '@angular/core';
import { Post } from 'src/app/Models/post';
import { PostService } from 'src/app/post.service';



@Component({
  selector: 'app-post-attivi',
  templateUrl: './post-attivi.component.html',
  styleUrls: ['./post-attivi.component.scss']
})
export class PostAttiviComponent {

    postArray: Post[] = [];


    constructor(private postSvc: PostService){

      this.postSvc.getPost().then(post => {
        this.postArray = post.filter(p => p.active)
      })
}


}
