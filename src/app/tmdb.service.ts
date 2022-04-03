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
}
