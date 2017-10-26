import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
//import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class MoviedbService {

    genres:any = [];
  constructor(private http: Http) { }

processMovies(data: any){
        let html = JSON.stringify(data);
        html = html.replace('_body', 'body');
        let jsonhtml = JSON.parse(html);
        html = jsonhtml.body;
        return JSON.parse(html);
    }
    
    processGenre(data: any){
        let html = JSON.stringify(data);
        html = html.replace('_body', 'body');
        let jsonhtml = JSON.parse(html);
        html = jsonhtml.body;
        let arrhtml =  JSON.parse(html);
        for (let sdata of arrhtml.genres) {
            this.genres.push(sdata.id) ;
            this.genres[sdata.id] = sdata.name;
        }
return this.genres;
    }
    
    getMoviesList(){
        return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=451a5c46225283a9a3e766eee8fa80ac").map(this.processMovies, this);
//        return 'abc';
    }
    
    getPopularMoviesList(){
        return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=451a5c46225283a9a3e766eee8fa80ac").map(this.processMovies, this);
    }
    
        getLatestMoviesList(){
        return this.http.get("https://api.themoviedb.org/3/movie/top_rated?api_key=451a5c46225283a9a3e766eee8fa80ac").map(this.processMovies, this);
    }
    
    getGenreName(){
        return this.http.get("https://api.themoviedb.org/3/genre/movie/list?api_key=451a5c46225283a9a3e766eee8fa80ac&language=en-US").map(this.processGenre, this);
    }
    
    getMovieDetails(id){
        return this.http.get("https://api.themoviedb.org/3/movie/"+id+"?api_key=451a5c46225283a9a3e766eee8fa80ac&language=en-US").map(this.processMovies, this);
        
    }
}
