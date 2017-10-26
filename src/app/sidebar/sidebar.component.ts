import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    tab:String='latest';
    curl:String='';
  constructor(private activatedRoute:ActivatedRoute, private _router:Router) { 
  }

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
          if(params.tab){
             this.tab = params.tab;
             }else{
                 
                 this.tab = this._router.url == 'dashboard'? 'latest' : '';
             }
        
      });

        this.curl = this._router.url;

//      console.log(this.tab);
  }

}
