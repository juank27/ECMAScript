// object reset
const obj = {
	name: 'Juan',
	age : 21,
	country : 'CO',
};
//colocando el primer parametro es lo que deseamos quitar
//con el segundo agregamos lo demas
let { name, ...all} = obj;
console.log(name, all); //-> { age: 21, country: 'CO' }
console.log(obj);

// ...
const obj1 = {
	name: 'Juan',
	age : 21,
}
//concatenamos el obj1 con el obj2
const obj2 = {
	...obj1,
	country : 'CO',
};
console.log(obj2);

//promise.finally()
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		(true)
		? resolve('Hello World')
		: reject(new Error('Test Error'));
	});
};
//llamado a la funcion
helloWorld()
	.then(response => console.log(response))
	.catch(error => console.log(error))
	// nos ayuda a saber cuando se termina la ejecucion de una promesa
	.finally(() => console.log('Finalizado'));

// RegExp
//expreciones regulares
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2022-01-01');
const yer = match[1];
const month = match[2];
const day = match[3];
const complet = [0];

console.log(yer, month, day);
