import { IPhotos } from "./iphotos";

export class Photos implements IPhotos{
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;

  constructor(albumId: number, id: number, title: string, url: string,thumbnaiUrl: string){
    this.albumId = albumId;
    this.id = id;
    this.title = title;
    this.url = url;
    this.thumbnailUrl = thumbnaiUrl;
  }
}
