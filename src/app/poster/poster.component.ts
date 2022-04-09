import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.less']
})
export class PosterComponent implements OnInit {
  netflixOriginalsArray: any=[];
  poster:any
  COMMON_IMAGE_URL='https://image.tmdb.org/t/p/original';
  url: any;

  constructor(private tmdbService:TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getNetflixOriginals().subscribe((data:any)=>{
      this.netflixOriginalsArray=data.results;
      this.appendCommonImageUrl();
      console.log("ikdj",this.netflixOriginalsArray)
      this.poster= this.netflixOriginalsArray[Math.floor(Math.random()*this.netflixOriginalsArray.length)];
      console.log("**",this.poster);
      console.log("**",this.poster.backdrop_path);
      this.url=this.poster.backdrop_path;
    },(error)=>{
    })
  }

  appendCommonImageUrl(){
      for(let i=0;i<this.netflixOriginalsArray.length;i++){
        this.netflixOriginalsArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.netflixOriginalsArray[i].backdrop_path;
    }
  }

}
