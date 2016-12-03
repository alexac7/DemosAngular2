import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-preguntas',
  templateUrl: './listado-preguntas.component.html',
  styleUrls: ['./listado-preguntas.component.css']
})
export class ListadoPreguntasComponent implements OnInit {

	preguntas: PreguntaInterface[] = [
		{
			pregunta: "¿España ganará la Euro 2016?",
			si: 22,
			no: 95
		},
		{
			pregunta: "¿Estás aprendiendo Angular 2 en DesarrolloWeb??",
			si: 262,
			no: 3
		},
		{
			pregunta: "¿Has hecho ya algún curso en EscuelaIT??",
			si: 1026,
			no: 1
		}
	];

  	constructor() { }

  	ngOnInit() {
  	}

}

interface PreguntaInterface{
	pregunta: string;
	si: number;
	no: number;
}
