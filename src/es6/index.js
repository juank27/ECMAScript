//link de notas en Notion.
//https://majestic-client-9f3.notion.site/ECMAScript-6-086011f9a1254ec98618e3101c0d780c
//Default Params y Concatenación
function newFunction(name, age, country) {
	var name = name || 'oscar';
	var age = age || 32;
	var country = country || 'MX';
	console.log(name, age, country);
}

// es6
function newFunction2(name = 'oscar', age = 32, country = "MX") {
	console.log(name, age, country);
}

//Forma de ser llamada la funion
newFunction2(); // tomara los parametros por defecto  name = 'oscar', age = 32, country = "MX"
newFunction2('Ricardo', '23', 'C0'); // toma los valores que se le estan pasando

//Uso de las plantillas literales
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world; //forma de concatenar antes
console.log(epicPhrase);

//Ayuda de la actualizacion es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//LET y CONST, Multilínea, Spread Operator y Desestructuración

//MultiTarea
//Forma de realizarse antes
let lorem = "Qui consequatur.Commodi.Ipsum vel duis yet minima\n"
	+ "otra frase epica que necesitamos.";

//Es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase epica`;

console.log(lorem);
console.log(lorem2);

//Desestructuracion
//Forma de realizarse antes
let person = {
	'name': 'oscar',
	'age': 32,
	'country': 'MX'
}
//acceso al contenido con el objeto person
console.log(person.name, person.age);

// ES6
let { name, age } = person;
console.log(name, age);

//Spread Operator
let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

// ES6
let education = ['David', ...team1, ...team2];
console.log(education);

//LET - CONST - VAR
//Var puede ser re-declarada y re-asignada.
{
	var globalVar = "Global Var";
	var globalVar = "Global Var2"; //redeclarada
}
console.log(globalVar); //puede ser llamado fuera del scop

//Let puede ser re-asignada, pero no re-declarada.
{
	let globalLet = 'Global Let';
	globalLet = 'Hoola'; //re-asignada.
	console.log(globalLet);
}

//Const
const	a = 'b';

//Arrow Functions, Promesas y Parámetros en objetos
//Parametros a objetos
let nombree = 'Juan';
let edad = 21;
//antes
obj = { name: nombree, age: edad };
//ahora
obj2 = { nombree, edad };
console.log(obj2); //-> { nombree: 'Juan', edad: 21 }

//Arrow Functions
const names = [
	{ name: 'juan', age : 21 },
	{ name: 'Carlos', age: 22 }
]
//como se recorria antes
let listOfNames = names.map(function (item) {
	console.log(item.age);
	console.log(item.name);
})
//como funciona ahora e6
let listOfNames2 = names.map(item =>console.log(item.name)); //-> juan \n Carlos

//Función tradicional
function nombre(parámetros) {
	return (valorRetornado)
}
//Función flecha
const nombre = (parámetros) => {
	return (valorRetornado)
}
//cuando tiene un solo parametro
const porDos = num => num * 2

//Retorno implícito
//se puede omitir la palabra reservada return
//Función tradicional
function suma(num1, num2) {
	return num1 + num2
}
//Función flecha
const suma = (num1, num2) => num1 + num2
//si se requieren mas lineas
const suma = (num1, num2) => (
	num1 + num2
)

//Promesas
const helloPromise = ()=>{
	//retornar una nueva promesa
	return new Promise((resolve, reject) =>{
		if (true) {
			resolve('hey!!'); //Funciono
		}else{
			reject('upss!!');// No funciono
		}
	})
}
//hacer llamado a la promesa
helloPromise()
	.then(response => console.log(response))//respuesta verdadera
	.then(() => console.log('hola')) //se pueden anidar yhen cuantas veces sea necesario
	.catch(error => console.log(error)); // captura el error - o no ejecucion.

//Clases, Módulos y Generadores
//clases
class calculator{
	constructor(){
		this.valueA = 0;
		this.valueB = 0;
	}
	sum(valueA, valueB){
		//asignacion de variables al constructor
		this.valueA = valueA;
		this.valueB = valueB
		return this.valueA + this.valueB;
	}
}
//llamada del metodo y crecion de un objeto.
const calc = new calculator();
console.log(calc.sum(2,2));

//Modulos
//importar el modulo
import { hello } from './module.js';
console.log(hello());

//generadores
function * helloWorld() {
	if (true) {
		yield 'hello!';
	}
	if (true) {
		yield 'world';
	}
}
//ejecucion
const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);