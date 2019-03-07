import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatGridListModule} from '@angular/material';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { StarRatingModule } from 'angular-star-rating';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { MoviedbService } from './moviedb.service';
import { StringPipe } from './string.pipe';
import { PlayComponent } from './play/play.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    StringPipe,
    PlayComponent
  ],
  imports: [
      HttpModule,
    BrowserModule, 
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatCheckboxModule, 
    MatGridListModule, 
    RouterModule.forRoot([
        {path:'home', component:HomeComponent},
        {path:'dashboard', component:DashboardComponent},
        {path:'dashboard/:tab', component:DashboardComponent},
        {path:'play', component:DashboardComponent},
        {path:'play/:id', component:PlayComponent},
        {path:'login', component:LoginComponent},
        {path: '', redirectTo: '/dashboard/latest', pathMatch: 'full'}
    ]),
      StarRatingModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue : 'ngmovies' }, MoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
