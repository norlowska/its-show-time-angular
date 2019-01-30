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


  constructor(private watchlistService: WatchListService) { }

  ngOnInit() {
    this.movieslist = this.watchlistService.getWatchlist();
    console.log("movieslist short")
    console.log(this.movieslist);
  }

}
