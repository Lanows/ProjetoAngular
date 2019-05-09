import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieRoutingModule } from './serie.routing.module';
import { SerieComponent } from './serie.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieService } from './serie.service';
import { SerieEditComponent } from './serie-edit/serie-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SerieComponent,
    SerieDetailComponent,
    SerieEditComponent,

  ],
  imports: [
    CommonModule,
    SerieRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    SerieService
  ]
})
export class SerieModule { }
