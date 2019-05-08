import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieRoutingModule } from './movie.routing.module';
import { MovieService } from './movie.service';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent,
    MovieEditComponent,

  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    MovieService
  ],
  exports: []
})
export class MovieModule { }
