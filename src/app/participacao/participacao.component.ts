import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie/movie.service';

@Component({
  selector: 'app-participacao',
  templateUrl: './participacao.component.html',
  styleUrls: ['./participacao.component.css']
})
export class ParticipacaoComponent implements OnInit {

  @Input() id: string;
  @Input() department: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,
    private _router: Router) { }

  movie = {}

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getParticipation(this.id)
        .subscribe(response => {
          this.movie = response;
        })
    });
  }

  goProgram(Movieid) {
    this._router.navigate(['filmes/detalhes', Movieid]);
  }
}
