import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'https://api.themoviedb.org/3';
  private key = '?api_key=07fa2cb44a9888f1a8ab8c9b1170d593';

  constructor(private http: HttpClient) { }

  getSearchResults(title): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/search/movie${this.key}&query=${title}`);
  }
  getMovie(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.url}/movie/${id}${this.key}`);
  }
  getNowPlaying(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/movie/now_playing${this.key}`);
  }

  getCredits(id: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.url}/movie/${id}/credits${this.key}`);
  }

}
