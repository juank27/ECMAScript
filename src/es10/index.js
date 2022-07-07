//flat
let array = [1, 2, 3, [1,2,3, [1,2,3]]];
//el argumento que pasa en flat es el nivel de profundidad
console.log(array.flat(2));

let array2 = [1,2,3,4,5];
//flatmap
console.log(array2.flatMap(value => [value, value * 2]));

//trimStart y trimEnd
let hello = '   hello world';
console.log(hello);//-> '   hello world'
console.log(hello.trimStart()); //-> hello world

let hello2 = 'hello world   ';
console.log(hello2);//-> 'hello world   '
console.log(hello2.trimEnd()); //-> hello world
//trim
let helloo = "    Hello world    "
console.log(helloo.trim()); //-> 'Hello world'

//try catch y el manejo de error
//antes
try {
	
} catch (error) {
	error
}
//despues
try {
	
}	catch {
	error
}

//object.fromEntries
let entries = [['name', 'Juan'], ['age', 30]];
console.log(Object.fromEntries(entries)); //-> {name: 'Juan', age: 30}

//Symbol
let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description); //-> My Symbol