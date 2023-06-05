import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPhotos } from 'src/app/Models/iphotos';
import { Photos } from 'src/app/Models/photos';
import { PhotoService } from 'src/app/photo.service';

@Component({
  selector: 'app-pag',
  templateUrl: './pag.component.html',
  styleUrls: ['./pag.component.sass']
})
export class PagComponent implements OnInit {

  foto:Photos[] = [];
  fotoFavorite: Photos[]= [];


  constructor(private photoSvc: PhotoService){}


  ngOnInit(): void {
    this.photoSvc.getPhotos().subscribe(data =>{
      console.log(data);
      let im = data.slice(0, 101);
      this.foto = im
    })
  }

  delete(id:number){
    this.photoSvc.deletePhotos(id).subscribe(data => {
      this.foto = this.foto.filter(photo => photo.id !== id);

    })
  }

  like(id:number){
    this.photoSvc.getPhoto(id).subscribe(data => {

    })
  }
}
