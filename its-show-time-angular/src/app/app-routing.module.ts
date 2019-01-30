import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NowPlayingComponent } from './components/now-playing/now-playing.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { UserMoviesComponent } from './components/user-movies/user-movies.component';

const routes: Routes = [
  { path: '', redirectTo: '/now-playing', pathMatch: 'full' },
  { path: 'search=:query', component: SearchResultsComponent},
  { path: 'user-movies', component: UserMoviesComponent},
  { path: 'now-playing', component: NowPlayingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
