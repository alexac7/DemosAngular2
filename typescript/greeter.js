function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
//var user = "Alex Aguilar"
var user = { firstName: "Alex", lastName: "Aguilar Cori" };
// Variables y tipos
var nombre = "Alex Aguilar";
var edad = 30;
var programador = true;
var langs = ["JAVA", "PHP", "Javascript"];
//document.body.innerHTML = greeter(user)
document.body.innerHTML = nombre + " - " + edad;
// Difrencia en tre var y let
var a = 10;
var b = 8;
if (a === 10) {
    var a_1 = 7;
    var b = 4;
    console.log("Alcance dentro del if: " + a_1 + " - " + b);
}
console.log("Alcance fuera del if: " + a + " - " + b);
//Funciones y tipado
function devuelveNumero(num) {
    return num;
}
function devuelveString(texto) {
    var res = false;
    if (texto == "hola") {
        res = true;
    }
    return res;
}
alert(devuelveNumero(1));
alert(devuelveString("hola"));
