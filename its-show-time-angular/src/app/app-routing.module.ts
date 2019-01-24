import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { UserMoviesComponent } from './components/user-movies/user-movies.component';

const routes: Routes = [
  { path: '/', components: NowPlayingComponent },
  { path: '/search=:query', components: SearchResultsComponent},
  { path: '/user-movies', components: UserMoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
