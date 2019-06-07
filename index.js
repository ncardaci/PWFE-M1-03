let http = require("http")
let fs = require ("fs")

http.createServer(function(peticion, respuesta){

	let archivo = peticion.url
	fs.readFile("public" + archivo, function(error, file){
		if(error){
			respuesta.end("404 - Archivo no encontrado :(")
		} else {
			respuesta.end (file)
		}
	})
		
}).listen(80)

