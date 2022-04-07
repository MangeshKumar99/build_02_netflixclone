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
  comedyMoviesArray:any=[];
  horrorMoviesArray:any=[];
  romanceMoviesArray:any=[];
  documentariesMoviesArray:any=[];
  netflixOriginalsArray:any=[];
  topRatedMoviesArray:any=[];
  trendingMoviesArray:any=[];


  ngOnInit(): void {
    this.tmdbService.getActionMovies().subscribe((data:any)=>{
      console.log(data.results);
      this.actionMoviesArray=data.results;
      this.appendCommonImageUrl('action');
    },(error)=>{
      console.log(error);
    })  

    this.tmdbService.getComedyMovies().subscribe((data:any)=>{
      console.log(data.results);
      this.comedyMoviesArray=data.results;
      this.appendCommonImageUrl('comedy');
    },(error)=>{
      console.log(error);
    })

    this.tmdbService.getHorrorMovies().subscribe((data:any)=>{
      console.log(data.results);
      this.horrorMoviesArray=data.results;
      this.appendCommonImageUrl('horror');
    },(error)=>{
      console.log(error);
    })

    this.tmdbService.getRomanceMovies().subscribe((data:any)=>{
      console.log(data.results);
      this.romanceMoviesArray=data.results;
      this.appendCommonImageUrl('romance');
    },(error)=>{
      console.log(error);
    })

    this.tmdbService.getDocumentaries().subscribe((data:any)=>{
      console.log(data.results);
      this.documentariesMoviesArray=data.results;
      this.appendCommonImageUrl('documentaries');
    },(error)=>{
      console.log(error);
    })

    this.tmdbService.getNetflixOriginals().subscribe((data:any)=>{
      console.log(data.results);
      this.netflixOriginalsArray=data.results;
      this.appendCommonImageUrl('netflix');
    },(error)=>{
      console.log(error);
    })

    this.tmdbService.getTopRated().subscribe((data:any)=>{
      console.log(data.results);
      this.topRatedMoviesArray=data.results;
      this.appendCommonImageUrl('toprated');
    },(error)=>{
      console.log(error);
    })

    this.tmdbService.getTrending().subscribe((data:any)=>{
      console.log(data.results);
      this.documentariesMoviesArray=data.results;
      this.appendCommonImageUrl('trending');
    },(error)=>{
      console.log(error);
    })


  }

  appendCommonImageUrl(val:string){
    if(val=='action'){
      for(let i=0;i<this.actionMoviesArray.length;i++){
        this.actionMoviesArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.actionMoviesArray[i].backdrop_path;
      }
    }

    if(val=='comedy'){
      for(let i=0;i<this.comedyMoviesArray.length;i++){
        this.comedyMoviesArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.comedyMoviesArray[i].backdrop_path;
      }
    }

    if(val=='horror'){
      for(let i=0;i<this.horrorMoviesArray.length;i++){
        this.horrorMoviesArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.horrorMoviesArray[i].backdrop_path;
      }
    }

    if(val=='romance'){
      for(let i=0;i<this.romanceMoviesArray.length;i++){
        this.romanceMoviesArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.romanceMoviesArray[i].backdrop_path;
      }
    }

    if(val=='documentaries'){
      for(let i=0;i<this.documentariesMoviesArray.length;i++){
        this.documentariesMoviesArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.documentariesMoviesArray[i].backdrop_path;
      }
    }

    if(val=='netflix'){
      for(let i=0;i<this.netflixOriginalsArray.length;i++){
        this.netflixOriginalsArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.netflixOriginalsArray[i].backdrop_path;
      }
    }

    if(val=='toprated'){
      for(let i=0;i<this.topRatedMoviesArray.length;i++){
        this.topRatedMoviesArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.topRatedMoviesArray[i].backdrop_path;
      }
    }

    if(val=='trending'){
      for(let i=0;i<this.trendingMoviesArray.length;i++){
        this.trendingMoviesArray[i].backdrop_path=this.COMMON_IMAGE_URL+this.trendingMoviesArray[i].backdrop_path;
      }
    }
  }
}
