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