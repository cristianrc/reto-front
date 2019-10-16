import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class MovieService {

  constructor (
    public _http: HttpClient
  ) { }

  getMovies(page): Observable<any> {
    let params = { api_key: environment.API_KEY, language: 'es', page: page };
    const serviceURL = `${environment.BASE_URL}/discover/movie`;

    return this._http.get(serviceURL, { params: params }).pipe(
      map((res: any) => {
        return  {
          movies: res.results.map((movie: Movie) => new Movie().deserialize(movie)),
          total_pages: res.total_pages,
          page: res.page,
          total_results: res.total_results
        }
      }));

    // return this._http.get<Array<Movie>>(serviceURL, { params: params }).pipe(
    //   map((res: any) =>  res.results.map((movie: Movie) => new Movie().deserialize(movie))));
  }

  // getMoviesOld(): Observable<Array<Movie>> {
  //   let params = {api_key: environment.API_KEY, language: 'es', page: '1'};
  //   const serviceURL = `${environment.BASE_URL}/discover/movie`;
  //   return this._http.get<Array<Movie>>(serviceURL, {params: params});
  // }
}
