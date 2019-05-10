import { MovieService } from './movie.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private _movieService: MovieService,
    private _router: Router) { }

  movies = [];
  search;
  totalElements: number;
  size: number;
  page: number = 0;


  ngOnInit() {
    this.getPageableProgram(0);
  }

  

  getPageableProgram(page){
    this._movieService.getTrending(page).subscribe(
      response => {
        this.movies = response['content'];
        this.totalElements = response['totalElements'];
        this.size = response['size'];
        this.page = response['pageable']['pageNumber'];
      }
    )
  }

  pageChanged(pageChange){
    if(pageChange != 0){
      this.page = pageChange;
      this.getPageableProgram(this.page);
    } else {
      this.getPageableProgram(0);
    }
  }

  goEdit(movie) {

    this._router.navigate(['filmes/detalhes', movie.id])
  }

  goSearch(value) {
    if (this.search == "titulo") {
      this._movieService.getMovieByTitle(value).subscribe(
        response => {
          this.movies = response['content'];
        }
      )
    }
    else if (this.search == "ano") {
      this._movieService.getMovieByReleaseDate(value).subscribe(
        response => {
          this.movies = response['content'];
        }
      )
    }
    else if (this.search == "lingua") {
      this._movieService.getMovieByLanguage(value).subscribe(
        response => {
          this.movies = response['content'];
        }
      )
    }
  }

  funcaoSelect(value) {
    this.search = value;
  }
}
