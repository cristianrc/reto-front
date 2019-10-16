import {Component, OnInit, TemplateRef} from '@angular/core';
import { Genres } from '../services/genres/genres.model';
import { GenresService } from '../services/genres/genres.service';
import { Movie } from '../services/discover/movie.model';
import { MovieService } from '../services/discover/movie.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public dataMovie;
  public genres: Array<Genres>;
  public movies: Array<Movie> = [];
  public totalItems: number = 30;
  public itemsPerPage: number = 10;
  modalRef: BsModalRef;

  constructor(
    public _movieService: MovieService,
    public _genresService: GenresService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getGenres();
  }

  getGenres() {
    this._genresService.getGenres().subscribe(
      (result:any) => {
        this.genres = result;
        console.log('getGenres ↓');
        console.log(result);
        this.getMovies(1);
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  getMovies(page) {
    this._movieService.getMovies(page).subscribe(
      (result:any) => {
        this.totalItems = result.total_results;
        this.itemsPerPage = result.movies.length;
        this.movies = result.movies;
        this.getMoviesFull();
        console.log('getPage ↓');
        console.log(result);
        console.log('getMovies ↓');
        console.log(this.movies);
      },
      error => {
        console.error(JSON.stringify(error));
      }
    );
  }

  setPage(data) {
    this.getMovies(data.page);
  }

  getMoviesFull() {

    this.movies.forEach((movie, i) => {
      this.movies[i].genres = [];
      movie.genre_ids.forEach(genreId => {
        this.genres.forEach(genre => {
          if(genreId == genre.id){
            this.movies[i].genres.push(genre.name);
          }
        });
      });
      this.movies[i].genres = this.movies[i].genres.join(', ');
    });
  }
  openModalDetail(movie, template: TemplateRef<any>){
    this.dataMovie = movie;
    this.modalRef = this.modalService.show(template);
  }
}
