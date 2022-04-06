import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-row',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.less']
})
export class RowComponent implements OnInit {

  constructor(private tmdbService:TmdbService) { }
  COMMON_IMAGE_URL='https://image.tmdb.org/t/p/original';
  n1:number=0;
  n2:number=6;
  actionMoviesArray:any=[];


  ngOnInit(): void {
    this.tmdbService.getActionMovies().subscribe((data:any)=>{
      console.log(data.results);
      this.actionMoviesArray=data.results;
      this.appendCommonImageUrl();
    },(error)=>{
      console.log(error);
    })  
  }

  appendCommonImageUrl(){
    for(let i=0;i<this.actionMoviesArray.length;i++){
      this.actionMoviesArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.actionMoviesArray[i].backdrop_path;
    }
  }
}
