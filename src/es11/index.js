//permite tomar el id del boton
const button = document.getElementById("btn");
//evento click del boton que puede realizar una importacion dinamica
button.addEventListener("click", async function() {
	//realiza la importacion del archivo file.js
	const module = await import("./file.js");
	//llama la funcion del archivo file.js
	module.hello();
});