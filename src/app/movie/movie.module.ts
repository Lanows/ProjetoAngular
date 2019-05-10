import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppModule } from './../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieRoutingModule } from './movie.routing.module';
import { MovieService } from './movie.service';
import { MovieEditComponent } from './movie-edit/movie-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ParticipacaoComponent } from '../participacao/participacao.component';
import { ParticipacaoProgramasComponent } from '../participacao-programas/participacao-programas.component';
import { ParticipacaoProgramasModule } from '../participacao-programas/participacao-programas.module';


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent,
    MovieEditComponent,
    ParticipacaoProgramasComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    MovieService
  ],
  exports: []
})
export class MovieModule { }
