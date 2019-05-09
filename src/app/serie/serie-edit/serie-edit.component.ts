import { SerieService } from './../serie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-serie-edit',
  templateUrl: './serie-edit.component.html',
  styleUrls: ['./serie-edit.component.css']
})
export class SerieEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _serieService: SerieService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private location: Location) { }

    movie;
    filmeAtualizado = {}

    
    editarForm : FormGroup = this.formBuilder.group({
      titulo: [''],
      temporada: [''],
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
  
        this._serieService.getById(id)
        .subscribe(response => {
          this.movie = response;
          this.formulario();
        })
      });
    }

    updateProgram(movie, filmeAtualizado){
      this._serieService.updateProgram(movie.id, filmeAtualizado).subscribe();
      this.location.back();
    }

    formulario(){
      this.editarForm.controls['titulo'].setValue(this.movie.title); 
      this.editarForm.controls['temporada'].setValue(this.movie.seasons); ;
      this.editarForm.controls['idioma'].setValue(this.movie.language);
      this.editarForm.controls['duracao'].setValue(this.movie.runtime);
      this.editarForm.controls['pais'].setValue(this.movie.country);
      this.editarForm.controls['lancamento'].setValue(this.movie.releaseDate);
      this.editarForm.controls['sinopse'].setValue(this.movie.overview);
      
      this.movie.genres.forEach(genre =>{
        (<FormArray>this.editarForm.get("generos")).push(this.addOtherSkillFormGroup(genre.description));
      })

      this.movie.participations.forEach(participation =>{
        (<FormArray>this.editarForm.get("participacao")).push(this.addOtherSkillFormGroup(participation.person.name));
      })
    }

    addOtherSkillFormGroup(texto: string): FormGroup {
      return this.formBuilder.group({
        nome: [texto]
      });
    }
  }