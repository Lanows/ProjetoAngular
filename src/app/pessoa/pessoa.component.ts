import { PessoaService } from './pessoa.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  constructor(private _pessoaService: PessoaService, private _router: Router) { }

  pessoas = [];
  search;

  ngOnInit() {
    this._pessoaService.getTrending().subscribe(
      response => {
        this.pessoas = response['content'];
      }
    )
  }

  goEdit(pessoa) {
    this._router.navigate(['pessoas/detalhes', pessoa.id])
  }
  goSearch(value) {
    if (this.search == "nome") {
      this._pessoaService.getPersonByName(value).subscribe(
        response => {
          this.pessoas = response['content'];
        }
      )
    }
  }

  funcaoSelect(value) {
    this.search = value;
  }
}