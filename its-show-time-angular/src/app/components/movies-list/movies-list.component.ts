import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { SortingOrder } from 'src/app/sorting-order';
import { Movie } from 'src/app/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnChanges {
  @Input() movies: Movie[];
  sortingOrder: SortingOrder;
  sortedMovies: Movie[];

  constructor() {
    this.sortingOrder = SortingOrder.TITLE_ASC;
    this.sortedMovies = this.movies;
    this.sort();
  }

  ngOnChanges() {
    this.sortedMovies = this.movies;
    console.log(this.movies);
    this.sort();
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
