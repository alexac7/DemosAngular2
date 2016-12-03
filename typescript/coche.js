var Coche = (function () {
    function Coche(color, modelo, velocidad) {
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Coche.prototype.alecelar = function () {
        this.velocidad++;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
    };
    return Coche;
}());
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
