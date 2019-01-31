import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movie';
import { WatchListService} from 'src/app/services/watchlist.service'
import { SortingOrder } from 'src/app/sorting-order';

@Component({
  selector: 'app-user-movies',
  templateUrl: './user-movies.component.html',
  styleUrls: ['./user-movies.component.css']
})
export class UserMoviesComponent implements OnInit {
  movieslist: Movie[];
  sortingOrder: SortingOrder;
  sortedMovies: Movie[];

  constructor(private watchlistService: WatchListService) { 
    this.sortingOrder = SortingOrder.TITLE_ASC;
  }

  ngOnInit() {
    this.movieslist = this.watchlistService.getWatchlist();
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
