import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesserviceService {

  apiURL = "http://localhost:3000/movies";
  constructor(private _http: HttpClient) { }

  getAllMovies(){
    return this._http.get(this.apiURL);
  }

  addMovie(movie){
    return this._http.post(this.apiURL, movie);
  }

  deleteMovie(movieId){
    return this._http.delete(this.apiURL+'/'+movieId);
  }
}
