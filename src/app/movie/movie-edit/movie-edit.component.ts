import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,
    private formBuilder: FormBuilder) { }

    movie = {}
    editarForm : FormGroup;

    ngOnInit() {
      this._activatedRoute.params.subscribe(params => {
        let id = params['id'];
  
        this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
        })
      });
    
      this.editarForm = this.formBuilder.group({
        titulo: ['',],
        ano: ['',],
        sinopse: ['',]
      });

    }

    teste(){
      // this.editarForm.setValue({titulo: this.movie.title});
      let teste = this.movie;
    }

    updateProgram(movie, filmeAtualizado){
      this._movieService.updateProgram(movie.id, filmeAtualizado).subscribe();
    }
  }