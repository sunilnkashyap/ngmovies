import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../moviedb.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
    mdata:any = '';
    pcom:String = '';
    genres:any = '';
    gname:String = '';
  constructor( 
    public moviedbService: MoviedbService,
     private _router:Router,
     private activatedRoute: ActivatedRoute
               ) { }

  ngOnInit() {
      this.moviedbService.getGenreName().subscribe(data => {
                  this.genres = data;          
        });
            this.activatedRoute.params.subscribe((params: Params) => {
                 this.moviedbService.getMovieDetails(params.id).subscribe(data => {
                  this.mdata = data;  
                     for(let pcom of data.production_companies){
                         this.pcom += pcom.name+', ';
                     }
                     for(let gname of data.genres){
                         this.gname += gname.name+', ';
                     }
                     console.log(data);
                    
        });
            });
      
         
  }

}
