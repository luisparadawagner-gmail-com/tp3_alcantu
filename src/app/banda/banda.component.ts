import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-banda',
  templateUrl: './banda.component.html',
  styleUrls: ['./banda.component.css']
})
export class BandaComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  bandaForm = this.fb.group({
    nombre: ['Rolling Stones', Validators.required],
    origen: [''],
    estado: [false],
    genero: [''],
    miembros: this.fb.array([ this.fb.control('') ]),
    fecha: [''],
    discografica: ['']
  });

  get miembros(){
    return this.bandaForm.get('miembros') as FormArray;
  }

  agregarMiembro(){
    this.miembros.push(this.fb.control(''));
  }

  submit(){
    debugger;
    this.bandaForm.value;

    this.bandaForm.setValue({
      nombre: 'Queen',
      origen: 'Inglaterra',
      estado: true,
      genero: 'Rock',
      miembros: this.bandaForm.get('miembros').value,
      fecha: this.bandaForm.get('fecha').value,
      discografica: 'EMI'
    });
    this.bandaForm.patchValue({ discografica: 'Capitol Records'});
  }

}
