import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _serieService: SerieService,
    private _router: Router,
    private location: Location) { }

  movie = {}
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._serieService.getById(id)
        .subscribe(response => {
          this.movie = response;
        })
    });
  }
  goEditProgram(movie) {
    this._router.navigate(['series/detalhes/edit', movie.id])
  }

  goPerson(id) {
    this._router.navigate(['pessoas/detalhes/', id]);
  }
  deleteProgram(movie) {
    let deletar = confirm("Tem certeza que deseja deletar essa Serie?");
    if (deletar) {
      this._serieService.deleteProgram(movie.id).subscribe();
      this.location.back();
    }
  }
}
