import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private url = 'https://api.themoviedb.org/3';
  private key = '?api_key=07fa2cb44a9888f1a8ab8c9b1170d593';

  constructor(private http: HttpClient) { }

  getSearchResults(title): Observable<any> {
    return this.http.get(`${this.url}/search/movie${this.key}&query=${title}`);
  }
  getMovie(id: string): Observable<any> {
    return this.http.get(`${this.url}/movie/${id}${this.key}`);
  }
  getNowPlaying(): Observable<any> {
    return this.http.get(`${this.url}/movie/now_playing${this.key}`);
  }
  getCredits(id: string): Observable<any> {
      return this.http.get(`${this.url}/movie/${id}/credits${this.key}`);
  }
}
