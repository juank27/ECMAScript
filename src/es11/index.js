//permite tomar el id del boton
const button = document.getElementById("btn");
//evento click del boton que puede realizar una importacion dinamica
button.addEventListener("click", async function() {
	//realiza la importacion del archivo file.js
	const module = await import("./file.js");
	//llama la funcion del archivo file.js
	module.hello();
});

//promise.allSettle
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolv 1"));

Promise.allSettled([promise1, promise2, promise3])
	.then(response => console.log(response));

//Operador Nullish Coalescing
const usuario1 = {}
const nombre1 = usuario1.name ?? "Andres"

const usuario2 = { name: "Juan" }
const nombre2 = usuario2.name ?? "Andres"

console.log(nombre1) // 'Andres'
console.log(nombre2) // 'Juan'
//ejemplo sensillo
const fooo = null ?? 'default string';
console.log(fooo); //-> 'default string'
const fooo2 = 'Hola' ?? 'default string';
console.log(fooo2); //-> 'Hola'

//encadenamiento opcional
const user = {};
//opcion mal hecha
console.log(user.profile.name); //-> error
//la aplicacion no para y sigue ejecutando el codigo
console.log(user?.profile?.name); //-> undefined

if (user?.profile?.name) {
	console.log('name');
}else{
	console.log('fail');
}
