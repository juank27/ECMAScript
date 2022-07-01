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

// Uso de las plantillas literales
let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world; //forma de concatenar antes
console.log(epicPhrase);

//Ayuda de la actualizacion es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);