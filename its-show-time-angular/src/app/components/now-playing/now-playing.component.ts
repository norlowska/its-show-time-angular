import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Movie } from 'src/app/movie';
import { SortingOrder } from 'src/app/sorting-order';
@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.component.html',
  styleUrls: ['./now-playing.component.css']
})
export class NowPlayingComponent implements OnInit {
  nowPlaying: Movie[];
  sortingOrder: SortingOrder;
  sortedMovies: Movie[];

  constructor(private moviesService: MoviesService) {
    this.sortingOrder = SortingOrder.TITLE_ASC;
  }

  ngOnInit() {
    this.moviesService.getNowPlaying().subscribe(res => {
      this.nowPlaying = res['results'];
      console.log(this.nowPlaying);
      // this.sortedMovies = this.nowPlaying;
      // this.sort();
    });
  }

  setTitleOrder() {
    if (this.sortingOrder === SortingOrder.TITLE_ASC) {
      this.sortingOrder = SortingOrder.TITLE_DESC;
  } else {
    this.sortingOrder = SortingOrder.TITLE_ASC;
  }
   this.sort();
  }

  setReleaseDateOrder() {
    if (this.sortingOrder === SortingOrder.RELEASE_DATE_ASC) {
        this.sortingOrder = SortingOrder.RELEASE_DATE_DESC;
    } else {
      this.sortingOrder = SortingOrder.RELEASE_DATE_ASC;
    }
    this.sort();
  }

  sort() {
    if (typeof this.sortedMovies !== 'undefined' && this.sortedMovies.length > 0) {
      switch (this.sortingOrder) {
        case SortingOrder.TITLE_ASC:
          this.sortedMovies.sort((a, b) => (a.original_title > b.original_title) ? 1 : ((b.original_title > a.original_title) ? -1 : 0));
        break;
        case SortingOrder.TITLE_DESC:
          this.sortedMovies.sort((a, b) => (a.original_title < b.original_title) ? 1 : ((b.original_title < a.original_title) ? -1 : 0));
        break;
        case SortingOrder.RELEASE_DATE_ASC:
          this.sortedMovies.sort((a, b) => (a.release_date > b.release_date) ? 1 : ((b.release_date > a.release_date) ? -1 : 0));
        break;
        case SortingOrder.RELEASE_DATE_DESC:
          this.sortedMovies.sort((a, b) => (a.release_date < b.release_date) ? 1 : ((b.release_date < a.release_date) ? -1 : 0));
        break;
      }
    }
  }
}
