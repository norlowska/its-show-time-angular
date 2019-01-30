import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  nowPlaying: Movie[];
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.getNowPlaying();
  }

  getNowPlaying() {
    this.moviesService.getNowPlaying().subscribe(res => {
      this.nowPlaying = res.results;
      console.log(this.nowPlaying);
    });
  }
}
