import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaService } from '../pessoa/pessoa.service';

@Component({
  selector: 'app-participacao-tvseries',
  templateUrl: './participacao-tvseries.component.html',
  styleUrls: ['./participacao-tvseries.component.css']
})
export class ParticipacaoTvseriesComponent implements OnInit {

  @Input() id: string;
  @Input() department: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private _pessoaService: PessoaService,
    private _router: Router) { }

  pessoa = {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._pessoaService.getParticipation(this.id)
        .subscribe(response => {
          this.pessoa = response;
        })
    });
  }

  goPerson(pessoaId) {
    this._router.navigate(['pessoas/detalhes', pessoaId]);
  }
}