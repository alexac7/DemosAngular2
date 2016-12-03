interface CocheBase{
	getColor(): string;
	getModelo(): string;
	getVelocidad(): number;
}

class Coche implements CocheBase{
	
	public color: string;
	public modelo: string;
	public velocidad: number;

	constructor(color: string, modelo: string, velocidad: number){
		this.color = color;
		this.modelo = modelo;
		this.velocidad = velocidad;
	}

	public getColor(): string{
		return this.color;	
	}

	public setColor(color: string){
		this.color = color;
	}

	public getModelo(): string{
		return this.modelo;	
	}

	public setModelo(modelo: string){
		this.modelo = modelo;
	}

	public getVelocidad(): number{
		return this.velocidad;	
	}

	public setVelocidad(velocidad: number){
		this.velocidad = velocidad;
	}

	public alecelar(){
		this.velocidad++;
	}

	public frenar(){
		this.velocidad--;
	}

}

var coche = new Coche("Blanco", "LANZA 98", 1500);

console.log("Color del coche 1 es: " + coche.getColor());
console.log("Modelo del coche 1 es: " + coche.getModelo());
console.log("Velocidad del coche 1 es: " + coche.getVelocidad());

/*var coche = new Coche();
coche.setColor("Rojo");
coche.alecelar();
coche.alecelar();
coche.alecelar();

var cocheDos = new Coche();
cocheDos.setColor("Amarillo");

var cocheTres = new Coche();
cocheTres.setColor("Verde");

console.log("Color del coche 1 es: " + coche.getColor());
console.log("La velocidad del coche 1 es: " + coche.getVelocidad());

coche.frenar();
console.log("La velocidad despues de frenar del coche 1 es: " + coche.getVelocidad());*/

/*console.log("Color del coque 1 es: " + coche.getColor());
console.log("Color del coque 2 es: " + cocheDos.getColor());
console.log("Color del coque 3 es: " + cocheTres.getColor());*/