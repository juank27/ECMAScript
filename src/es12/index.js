//Método replaceAll()
const string = "Loremp ispum dolor sit amet Loremp insum dolor sit amet";
const remplacedString = string.replace("Loremp", "Hola");
console.log(remplacedString); //-> 'Hola ispum'
//con el nuevo metodo
const remplacedString2 = string.replaceAll("Loremp", "Hola");
console.log(remplacedString2);

//Métodos privados de clases
class Message{
	#show(val){
		console.log(val);
	};
}
const message = new Message();
message.show("Hola"); //-> error porque el metodo es privado

//Promise.any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
	.then(response => console.log(response)); //-> 2

//Referencias débiles
class anyClass{
	constructor(element){
		this.ref = new WeakRef(element);
	}
}

//Nuevos operadores de asignación
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //-> false
console.log(isTrue ||= isFalse); //-> false
console.log(isTrue ??= isFalse); //-> false