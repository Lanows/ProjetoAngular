import { Location } from '@angular/common';
import { MovieService } from '../movie.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  @Input() id: string;
  @Input() department: any;

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,
    private _router: Router,
    private location: Location) { }

  movie = {}
  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
        })
    });
  }
  goEditProgram(movie) {
    this._router.navigate(['filmes/detalhes/edit', movie.id])
  }

  goPerson(id) {
    this._router.navigate(['pessoas/detalhes/', id]);
  }

  deleteProgram(movie) {
    let deletar = confirm("Tem certeza que deseja deletar esse filme?");
    if (deletar) {
      this._movieService.deleteProgram(movie.id).subscribe();
      this.location.back();
    }
  }
}
