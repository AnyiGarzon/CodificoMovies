import { Component, OnInit } from '@angular/core';
import { MoviesserviceService } from './moviesservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  movieObject = {
    title: '',
    year: 0,
    genres: '',
  }

  moviesList: any = [];
  headElements = ['id', 'title', 'year', 'genres', 'action'];

  constructor(private moviesService: MoviesserviceService){

  }

  ngOnInit() {
    this.getMoviesList();    
  }

  getMoviesList(){
    this.moviesService.getAllMovies().subscribe((response) =>{
      this.moviesList = response;
    })
  }

  addMovie(movieObject){
    console.log(movieObject);
    this.moviesService.addMovie(movieObject).subscribe((response) =>{
      this.getMoviesList();
    })
  }

  deleteMovie(movieId){
    console.log(movieId);
    this.moviesService.deleteMovie(movieId).subscribe((response) =>{
      this.getMoviesList();
    })
  }

  

}

