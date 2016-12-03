/**
 * Created by Administrador on 12/2/2016.
 */
export class Reloj{
    private hora: number;
    private minuto: number;
    private segundo: number;

    constructor(hora: number, minuto: number, segundo: number){
        this.hora = hora;
        this.minuto = minuto;
        this.segundo = segundo;
    }


    getHora(): number {
        return this.hora;
    }

    setHora(value: number) {
        this.hora = value;
    }

    getMinuto(): number {
        return this.minuto;
    }

    setMinuto(minuto: number) {
        this.hora = minuto;
    }

    getSegundo(): number {
        return this.segundo;
    }

    setSegundo(segundo: number) {
        this.hora = segundo;
    }
}
