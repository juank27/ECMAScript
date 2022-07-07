//entries()
const data = {
	frontend : 'oscar',
	backend : 'juan',
	desing : 'Ana'
}
//conversion de objeto a matriz
const entries = Object.entries(data);
console.log(entries);
// -> [ [ 'frontend', 'oscar' ], [ 'backend', 'juan' ], [ 'desing', 'Ana' ] ]
console.log(entries.length);

//Devuelve los valores de un objeto a un arreglo.
const data1 = {
	frontend: 'oscar',
	backend: 'juan',
	desing: 'Ana'
}
//convirtiendo a arrry los value
const values = Object.values(data1);
console.log(values);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(string.padEnd(12, ' -----'));