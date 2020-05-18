import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

interface Genero {
  value: string;
  viewValue: string;
}

export interface User {
  name: string;
}

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Autocompletar
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }
  
  @Input() varOrigG: string;
	@Input() varModG: string;

	@Output() cambioGenero = new EventEmitter<string>();

  genero1 = new FormControl('Rock');
  
  modificarGenero(genero1: FormControl) {
		if (genero1.value === 'Rock') {
			this.cambioGenero.emit('Pop');
		} else {
			this.cambioGenero.emit('Funk');
		}
  }
  

  //Select
  selectedValue: string;

  generos: Genero[] = [
    {value: 'rock', viewValue: 'Rock'},
    {value: 'pop', viewValue: 'Pop'},
    {value: 'funk', viewValue: 'Funk'}
  ];

  //Autocompletar
  myControl = new FormControl();
  options: User[] = [
    {name: 'Rock'},
    {name: 'Pop'},
    {name: 'Funk'}
  ];
  filteredOptions: Observable<User[]>;

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }


}
