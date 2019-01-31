import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../../movie';
import { SearchResults } from '../../search-results';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  title: string;
  movies: Movie[];

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe( params => {
      this.title = params['title'];
      this.searchMovies(this.title);
    });
  }

  searchMovies(title: string) {
    this.moviesService.getSearchResults(title).subscribe( response => {
      const searchResults = response;
      this.movies = searchResults.results;
      console.log(this.movies);
    });
  }

}
