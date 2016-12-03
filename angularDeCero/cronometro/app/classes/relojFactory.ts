/**
 * Created by Administrador on 12/2/2016.
 */
import {Injectable} from "@angular/core";
import {Reloj} from "./reloj";

@Injectable()
export class RelojFactory{

    constructor(){

    }

    nuevoReloj(hora: number, minuto: number, segundo: number){
        return new Reloj(hora, minuto, segundo);
    }
}
