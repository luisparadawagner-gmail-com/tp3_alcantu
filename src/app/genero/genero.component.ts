import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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

}
