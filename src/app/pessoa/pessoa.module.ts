import { ParticipacaoComponent } from './../participacao/participacao.component';
import { CountryPipe } from './../country.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaRoutingModule } from './pessoa.routing.module';
import { PessoaComponent } from './pessoa.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';
import { PessoaService } from './pessoa.service';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PessoaComponent,
    PessoaDetailComponent,
    PessoaEditComponent,
    CountryPipe,
    ParticipacaoComponent
  ],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    PessoaService
  ],
  exports: []
})
export class PessoaModule { }
