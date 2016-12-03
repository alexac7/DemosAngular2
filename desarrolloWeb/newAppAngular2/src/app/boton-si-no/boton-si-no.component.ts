import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-si-no',
  templateUrl: './boton-si-no.component.html',
  styleUrls: ['./boton-si-no.component.css']
})
export class BotonSiNoComponent implements OnInit {

	texto: string = "NO";

	estadoPositivo: boolean = true;

  	constructor() { }

	ngOnInit() {
	}

	cambiarEstado(){
		this.texto = (this.estadoPositivo) ? "SI" : "NO";
		this.estadoPositivo = !this.estadoPositivo;
	}

}
