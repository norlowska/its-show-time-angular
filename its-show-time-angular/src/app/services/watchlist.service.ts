import { Injectable } from "@angular/core";
import { Movie } from 'src/app/movie';

@Injectable({
    providedIn: 'root'
})
export class WatchListService {

    private watchlist: Movie[];

    constructor() {
        let watchlist = this.getWatchlist();

    }

    getWatchlist(): Movie[] {
        let localStorageItem = JSON.parse(localStorage.getItem('watchlist'));
        return localStorageItem == null ? [] : localStorageItem.watchlist;
    }

    addMovie(movie: Movie) {
        if (this.watchlist.map(function (item) { return item.id; }).indexOf(movie.id) == -1) {
            this.watchlist.push(movie);
        }

        this.setLocalStorageWatchlist(this.watchlist);
    }

    removeMovie(movie: Movie) {
        let removeIndex = this.watchlist.map(function (item) { return item.id; }).indexOf(movie.id);
        this.watchlist.splice(removeIndex, 1);

        this.setLocalStorageWatchlist(this.watchlist);
    }

    private setLocalStorageWatchlist(watchlist: Movie[]) : void {
        localStorage.setItem('watchlist', JSON.stringify({watchlist : watchlist}))
    }

}