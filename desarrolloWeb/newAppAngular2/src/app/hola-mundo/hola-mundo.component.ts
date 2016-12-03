import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hola-mundo',
	templateUrl: './hola-mundo.component.html',
	styleUrls: ['./hola-mundo.component.css']
})
export class HolaMundoComponent implements OnInit {

	dato = "Creando componentes para el Desarrolo angular 2";	

  	constructor() { }

	ngOnInit() {
		console.log("Compnenet Iniciazado!!!!!!!!!!!")
	}

}
