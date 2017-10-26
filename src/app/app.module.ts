import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdGridListModule} from '@angular/material';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { StarRatingModule } from 'angular-star-rating';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { MoviedbService } from './moviedb.service';
import { StringPipe } from './string.pipe';
import { PlayComponent } from './play/play.component';

export const fireConf = {
    apiKey: 'AIzaSyC9JAJ-aqqOtfefjvQs6mVHANxnarhRdog',
    authDomain: 'movies-78a2a.firebaseapp.com',
    databaseURL: 'https://movies-78a2a.firebaseio.com',
    projectId: 'movies-78a2a',
    storageBucket: 'movies-78a2a.appspot.com',
    messagingSenderId: '48718688824'
};
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
      AngularFireModule.initializeApp(fireConf),AngularFireDatabaseModule,AngularFireAuthModule,
      HttpModule,
    BrowserModule, BrowserAnimationsModule, MdButtonModule, MdCheckboxModule, MdGridListModule, RouterModule.forRoot([
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
  providers: [MoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
