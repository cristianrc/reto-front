import { NgModule, LOCALE_ID } from '@angular/core';
import {CommonModule, registerLocaleData} from '@angular/common';
import { HomeComponent } from './home.component';
import { MovieComponent } from './movie/movie.component';
import { PaginationModule} from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal'
// import { MovieService } from '../services/discover/movie.service';
import localeDe from '@angular/common/locales/es-419';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [HomeComponent, MovieComponent],
  exports: [HomeComponent],
  providers: [{provide: LOCALE_ID, useValue: 'es-419'}]
  // providers: [MovieService]
})
export class HomeModule { }
