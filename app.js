var  http = require("http");

var server = http.createServer(
	function(request, response){
		response.writeHead(200,{
			"Content-Type":"text/plain"
		});
		response.end("hola mundo");
	}
);

server.listen(8000, function(){
	console.log("servidor escuchando puerto 8000")
});//escuche este puerto