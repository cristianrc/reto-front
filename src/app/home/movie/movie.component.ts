import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @Input() movie: any;
  @Output() movieDetailEvent: EventEmitter<any>= new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  eventEmitOutput(movie){
    this.movieDetailEvent.emit(movie);
  }
}
