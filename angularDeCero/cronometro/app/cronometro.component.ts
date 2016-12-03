/**
 * Created by Administrador on 12/1/2016.
 */
import {Component} from '@angular/core';
import {Reloj} from '../app/classes/reloj';
import {RelojFactory} from "./classes/relojFactory";

@Component({
    selector: 'cronometro',
    templateUrl: '../app/cronometro.component.html'
})

export class CronometroComponent{

    hora: number = 0;
    minuto: number = 0;
    segundo: number = 0;
    lapsos: Array<Reloj> = [];
    contador: any;

    relojFactory: RelojFactory;

    constructor(relojFactory: RelojFactory){
        this.relojFactory = relojFactory;
    }

    start(){
        if(this.contador == undefined){
            this.contador = setInterval(()=> {
                this.segundo += 1;
                if(this.segundo == 60){
                    this.segundo = 0;
                    this.minuto += 1;
                    if(this.minuto == 60){
                        this.minuto = 0;
                        this.hora += 1;
                        if(this.hora == 24){
                            this.hora = 0;
                        }
                    }
                }

            }, 100);
        }
    }

    lapso(){
        let reloj = this.relojFactory.nuevoReloj(this.hora, this.minuto, this.segundo);
        this.lapsos.push(reloj);
    }

    stop(){
        clearInterval(this.contador);
        this.hora = 0;
        this.minuto = 0;
        this.segundo = 0;
        this.contador = null;
    }
}
