import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MoviedbService } from '../moviedb.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    hover = '';
    movies:any = '';
    genres:any = '';
  constructor(
    public moviedbService: MoviedbService,
     private _router:Router,
     private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
       this.activatedRoute.params.subscribe((params: Params) => {
        let tab = params.tab;
        switch(tab){
              case 'popular':this.getLatestMovies();break;
                case 'latest':this.getPopularMovies();break;
                default:this.getMovies();break;
                }
      });
              this.moviedbService.getGenreName().subscribe(data => {
                  this.genres = data;          
        });
  }
    
    getLatestMovies(){
             this.moviedbService.getLatestMoviesList().subscribe(data => {
                 
            this.movies = data.results;
                 console.log(data); 
        });
    }
    
    getPopularMovies(){
            this.moviedbService.getPopularMoviesList().subscribe(data => {
            this.movies = data.results;
        });
    }
    getGenreName(id){
        return 'Action';
//        this.moviedbService.getGenreName(id).subscribe(data => {
//           console.log(data);
//            return 'Action';
//          
//        });
        
    }
    addFavorite(movie){
        console.log(movie);
    }
    
    getMovies(){
        this.moviedbService.getMoviesList().subscribe(data => {
            this.movies = data.results;
//            console.log(this.movies);
        });
    }
}
