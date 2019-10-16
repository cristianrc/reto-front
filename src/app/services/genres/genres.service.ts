import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Genres } from './genres.model';
import { environment } from "../../../environments/environment";
import { map } from 'rxjs/operators';

@Injectable()
export class GenresService {

  constructor(
    public _http: HttpClient
  ) { }

  getGenres(): Observable<Array<Genres>> {
    let params = { api_key: environment.API_KEY, language: 'es' };
    const serviceURL = `${environment.BASE_URL}/genre/movie/list`;

    return this._http.get<Array<Genres>>(serviceURL, { params: params }).pipe(
      map((res: any) =>  res.genres.map((genres: Genres) => new Genres().deserialize(genres))));
  }

}
