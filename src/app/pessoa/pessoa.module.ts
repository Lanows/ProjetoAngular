import { CountryPipe } from './../country.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaRoutingModule } from './pessoa.routing.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoaService } from './pessoa.service';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';

@NgModule({
  declarations: [
    PessoaComponent,
    PessoaDetailComponent,
    PessoaEditComponent,
    CountryPipe
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule
  ],
  providers: [
    PessoaService
  ],
  exports: []
})
export class PessoaModule { }
