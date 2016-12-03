interface Person{
	firstName: String;
	lastName: String;
}

function greeter(person: Person){
	return "Hello " + person.firstName + " " + person.lastName;
}

//var user = "Alex Aguilar"
var user = {firstName: "Alex", lastName: "Aguilar Cori"}

// Variables y tipos
var nombre: string = "Alex Aguilar";
var edad: number = 30;
var programador: boolean = true;
var langs: Array<string> = ["JAVA", "PHP", "Javascript"];


//document.body.innerHTML = greeter(user)
document.body.innerHTML = nombre + " - " + edad;


// Difrencia en tre var y let
var a = 10;
var b = 8;

if(a === 10){
	let a = 7;
	var b = 4;
	console.log("Alcance dentro del if: " + a + " - " + b);
}

console.log("Alcance fuera del if: " + a + " - " + b);

//Funciones y tipado
function devuelveNumero(num: number){
	return num;
}

function devuelveString(texto: string): boolean{
	var res = false;
	if(texto == "hola"){
		res = true;
	}
	return res;
}

alert(devuelveNumero(1));
alert(devuelveString("hola"));