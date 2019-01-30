import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  @Input() movie: Movie;
  url_movie: string;
  url_img: string;
  constructor() { }

  ngOnInit() {
    this.url_movie = 'https://www.themoviedb.org/movie/' + this.movie.id;
    this.url_img = 'https://image.tmdb.org/t/p/w154/' + this.movie.poster_path;
  }

}
