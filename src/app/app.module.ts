import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { MovieService } from "./services/discover/movie.service";
import { GenresService } from "./services/genres/genres.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HomeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MovieService, GenresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
