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
  url:any

  constructor(private tmdbService:TmdbService) { }

  ngOnInit(): void {
    this.tmdbService.getNetflixOriginals().subscribe((data:any)=>{
      this.netflixOriginalsArray=data.results;
      this.appendCommonImageUrl();
      this.poster= this.netflixOriginalsArray[Math.floor(Math.random()*this.netflixOriginalsArray.length)];
      if(this.poster.overview!=""){
        this.poster.overview= this.poster.overview.slice(0,this.poster.overview.length/2) +"...";
      }
      console.log(this.poster);
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
