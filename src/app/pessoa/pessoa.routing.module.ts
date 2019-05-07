import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaComponent } from './pessoa.component';
import { PessoaDetailComponent } from './pessoa-detail/pessoa-detail.component';

const routes: Routes = [
  { path: '', component: PessoaComponent },
  { path: 'detalhes/:id', component: PessoaDetailComponent },
  {  path: 'detalhes/edit/:id', component: PessoaEditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
