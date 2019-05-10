import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoa-detail',
  templateUrl: './pessoa-detail.component.html',
  styleUrls: ['./pessoa-detail.component.css']
})
export class PessoaDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _pessoaService: PessoaService,
    private _router: Router,
    private  location: Location){ }

  pessoa = {}
  
  
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._pessoaService.getById(id)
        .subscribe(response => {
          this.pessoa = response;
        })
    });
  }

  goEditPessoa(pessoa) {
    this._router.navigate(['pessoas/detalhes/edit', pessoa.id])
  }

  deletePerson(pessoa){
    let deletar = confirm("Tem certeza que deseja deletar essa Pessoa?");
    if(deletar){
       this._pessoaService.deletePerson(pessoa.id).subscribe();
       this.location.back();
    }
   }
}