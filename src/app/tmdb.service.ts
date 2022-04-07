import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  constructor(private http: HttpClient) { }
  commonUrl='https://api.themoviedb.org/3/';
  API_KEY='a9a66c8a3df8af6bb8b436a31e2634ce';

  getActionMovies(){
    const url= `${this.commonUrl}discover/movie?api_key=${this.API_KEY}&with_genres=28`;
    return this.http.get(url);
  }
  getComedyMovies(){
    const url= `${this.commonUrl}discover/movie?api_key=${this.API_KEY}&with_genres=35`;
    return this.http.get(url);
  }
  getHorrorMovies(){
    const url= `${this.commonUrl}discover/movie?api_key=${this.API_KEY}&with_genres=27`;
    return this.http.get(url);
  }
  getRomanceMovies(){
    const url= `${this.commonUrl}discover/movie?api_key=${this.API_KEY}&with_genres=10749`;
    return this.http.get(url);
  }
  getDocumentaries(){
    const url= `${this.commonUrl}discover/movie?api_key=${this.API_KEY}&with_genres=99`;
    return this.http.get(url);
  }
  getNetflixOriginals(){
    const url= `${this.commonUrl}discover/tv?api_key=${this.API_KEY}&with_network=123`;
    return this.http.get(url);
  }
  getTrending(){
    const url=`${this.commonUrl}trending/all/week?api_key=${this.API_KEY}&language=en-US`;
    return this.http.get(url);
  }
  getTopRated(){
   const url=`${this.commonUrl}movie/top_rated?api_key=${this.API_KEY}&language=en-US`
    return this.http.get(url);
  }
}
