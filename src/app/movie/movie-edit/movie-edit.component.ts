import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _movieService: MovieService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private location: Location) { }

  movie;
  filmeAtualizado = {}

  editarForm: FormGroup = this.formBuilder.group({
    titulo: [''],
    idioma: [''],
    duracao: [''],
    pais: [''],
    lancamento: [''],
    sinopse: [''],
    generos: this.formBuilder.array([]),
    participacao: this.formBuilder.array([])
  })

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._movieService.getById(id)
        .subscribe(response => {
          this.movie = response;
          this.formulario();
        })
    });
  }

  updateProgram(movie, filmeAtualizado) {
    this._movieService.updateProgram(movie.id, filmeAtualizado).subscribe();
    console.log(this.filmeAtualizado);
    this.location.back();
  }

  formulario() {
    this.editarForm.controls['titulo'].setValue(this.movie.title);
    this.editarForm.controls['idioma'].setValue(this.movie.language);
    this.editarForm.controls['duracao'].setValue(this.movie.runtime);
    this.editarForm.controls['pais'].setValue(this.movie.country);
    this.editarForm.controls['lancamento'].setValue(this.movie.releaseDate);
    this.editarForm.controls['sinopse'].setValue(this.movie.overview);

    this.movie.genres.forEach(genre => {
      (<FormArray>this.editarForm.get("generos")).push(this.addOtherSkillFormGroup(genre.description));
    })

    // this.movie.participations.forEach(participation =>{
    //   (<FormArray>this.editarForm.get("participacao")).push(this.addOtherSkillFormGroup(participation.person.name));
    // })
  }

  addOtherSkillFormGroup(texto: string): FormGroup {
    return this.formBuilder.group({
      nome: [texto]
    });
  }
}