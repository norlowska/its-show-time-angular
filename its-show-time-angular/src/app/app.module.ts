import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { UserMoviesComponent } from './components/user-movies/user-movies.component';
import { UserMoviesShortComponent } from './components/user-movies-short/user-movies-short.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    UserMoviesComponent,
    UserMoviesShortComponent,
    SearchResultsComponent,
    NowPlayingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
