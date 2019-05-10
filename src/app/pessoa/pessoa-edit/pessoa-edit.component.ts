import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-pessoa-edit',
  templateUrl: './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private _pessoaService: PessoaService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private location: Location) { }

  pessoa;
  pessoaAtualizado = {}

  editarForm: FormGroup = this.formBuilder.group({
    nome: [''],
    genero: [''],
    altura: [''],
    pais: [''],
    cidade: [''],
    participacao: this.formBuilder.array([])
  })

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      let id = params['id'];

      this._pessoaService.getById(id)
        .subscribe(response => {
          this.pessoa = response;
          this.formulario();
        })
    });
  }

  updateProgram(pessoa, pessoaAtualizado) {
    this._pessoaService.updatePerson(pessoa.id, pessoaAtualizado).subscribe();
    console.log(this.pessoaAtualizado);
    this.location.back();
  }

  formulario() {
    this.editarForm.controls['nome'].setValue(this.pessoa.name);
    this.editarForm.controls['genero'].setValue(this.pessoa.gender);
    this.editarForm.controls['altura'].setValue(this.pessoa.height);
    this.editarForm.controls['pais'].setValue(this.pessoa.hometown);
    this.editarForm.controls['cidade'].setValue(this.pessoa.country);

    this.pessoa.participations.forEach(participation => {
      (<FormArray>this.editarForm.get("participacao")).push(this.addOtherSkillFormGroup(participation.program.title));
    })
  }

  addOtherSkillFormGroup(texto: string): FormGroup {
    return this.formBuilder.group({
      nome: [texto]
    });
  }
}