import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { WatchListService} from 'src/app/services/watchlist.service'

@Component({
  selector: 'app-user-movies-short',
  templateUrl: './user-movies-short.component.html',
  styleUrls: ['./user-movies-short.component.css']
})
export class UserMoviesShortComponent implements OnInit {
  movieslist: Movie[];
  url_movie: string;
  url_img: string;

  constructor(private watchlistService: WatchListService) { }

  ngOnInit() {
    this.url_movie = 'https://www.themoviedb.org/movie/';
    this.url_img = 'https://image.tmdb.org/t/p/w154/';
    this.movieslist = this.watchlistService.getWatchlist();
    // this.watchlistService.getWatchlist().subscribe(res => {this.movieslist = res});
  }

  removeFromWatchlist(movie: Movie) {
    this.watchlistService.removeMovie(movie);
    this.movieslist = this.watchlistService.getWatchlist();
  }

}
