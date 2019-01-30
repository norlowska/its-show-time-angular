import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { UserMoviesComponent } from './components/user-movies/user-movies.component';
import { UserMoviesShortComponent } from './components/user-movies-short/user-movies-short.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    UserMoviesComponent,
    UserMoviesShortComponent,
    SearchResultsComponent,
    NowPlayingComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
