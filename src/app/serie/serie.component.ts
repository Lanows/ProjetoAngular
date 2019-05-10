import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  constructor(private _serieService: SerieService,
    private _router: Router) { }

  series = [];
  search;
  totalElements: number;
  size: number;
  page: number = 0;

  ngOnInit() {

    this.getPageableProgram(0);

  }

  
  getPageableProgram(page){
    this._serieService.getTrending(page).subscribe(
      response => {
        this.series = response['content'];
        this.totalElements = response['totalElements'];
        this.size = response['size'];
      }
    )
  }

  pageChanged(pageChange){
    if(pageChange != 0){
      this.page = pageChange;
      this.getPageableProgram(this.page);
    } else {
      this.getPageableProgram(1);
    }
  }

  goEdit(serie) {
    this._router.navigate(['series/detalhes', serie.id])
  }
  goSearch(value) {
    if (this.search == "titulo") {
      this._serieService.getTvSerieByTitle(value).subscribe(
        response => {
          this.series = response['content'];
        }
      )
    }
    else if (this.search == "ano") {
      this._serieService.getTvSerieByReleaseDate(value).subscribe(
        response => {
          this.series = response['content'];
        }
      )
    }
    else if (this.search == "lingua") {
      this._serieService.getTvSerieByLanguage(value).subscribe(
        response => {
          this.series = response['content'];
        }
      )
    }
  }

  funcaoSelect(value) {
    this.search = value;
  }
}
