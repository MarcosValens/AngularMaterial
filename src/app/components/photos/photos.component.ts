import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/model/Photo';
import { PhotosService } from '../../services/photos.service'


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos:Photo[] = [];
  constructor(public photoService:PhotosService) { 
    
  }

  ngOnInit(){
    this.photoService.getPhotos().subscribe(
      photos => {
       this.photos = photos
       console.log(photos)},
      err => console.log(err)
    )
  }

  click():void{
    alert("Click!")
  }
}
