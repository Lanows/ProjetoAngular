import { MovieService } from '../movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,
    private _router: Router) { }
    
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

  goPerson(id){
    this._router.navigate(['pessoas/detalhes/', id]);
  }

  deleteProgram(movie){
   let deletar = confirm("Tem certeza que deseja deletar esse filme?");
   if(deletar){
      this._movieService.deleteProgram(movie.id).subscribe();
      this._router.navigate(['filmes']);
   }
  }
}
