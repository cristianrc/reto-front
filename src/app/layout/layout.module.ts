import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FooterComponent, HeaderComponent, LoadingComponent],
  exports: [FooterComponent, HeaderComponent, LoadingComponent]
})
export class LayoutModule { }
