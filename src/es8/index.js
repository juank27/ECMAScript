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

//Async-Await
const helloWorld = () => {
	return new Promise((resolve, reject) =>{
		(true)
			? setTimeout(() => resolve('hello world'), 3000)
			: reject(new Error('test error'));
	})
}

//como usarla
const helloAsync = async () => {
	const hello = await helloWorld();
	console.log(hello);
}
//haciendo el llamado
helloAsync(); //-> hello world

//otra forma de manejar el async
const anotherFunction = async () => {
	try {
		const hello = await helloWorld();
		console.log();
	} catch (error) {
		console.log(error);
	}
}