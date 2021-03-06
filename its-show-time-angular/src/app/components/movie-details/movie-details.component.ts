import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie';
import { WatchListService} from 'src/app/services/watchlist.service';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieCredits } from 'src/app/movie-credits';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  movieCredits: MovieCredits;
  isFetching = true;
  url_movie: string;
  url_img: string;
  url_credits_url: String;
  url_credits_img: String;

  constructor(private watchlistService: WatchListService, private moviesService: MoviesService ) { }

  ngOnInit() {
    this.url_movie = 'https://www.themoviedb.org/movie/' + this.movie.id;
    this.url_img = 'https://image.tmdb.org/t/p/w154/' + this.movie.poster_path;
    this.url_credits_img = 'https://image.tmdb.org/t/p/w92';
    this.url_credits_url = 'https://www.themoviedb.org/person/';
    this.getCredits();
  }

  addToWatchlist(movie: Movie) {
    this.watchlistService.addMovie(movie);
  }

   getCredits() {
     this.moviesService.getCredits(this.movie.id).subscribe( (res) => {
      this.movieCredits = res;
      this.movie.cast = this.movieCredits.cast;
      this.movie.crew = this.movieCredits.crew;
      this.isFetching = false;
    });
   }

   isOnList(id: number) {
     const watchlist = this.watchlistService.getWatchlist();
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === id) {
          return true;
      }
  }

  return false;
   }
}
