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
  totalElements: number;
  size: number;
  page: number = 0;


  ngOnInit() {

    this.getPageablePerson(0);
  }
  
  getPageablePerson(page){
    this._pessoaService.getTrending(page).subscribe(
      response => {
        this.pessoas = response['content'];
        this.totalElements = response['totalElements'];
        this.size = response['size'];
      }
    )
  }

  pageChanged(pageChange){
    if(pageChange != 0){
      this.page = pageChange;
      this.getPageablePerson(this.page);
    } else {
      this.getPageablePerson(1);
    }
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