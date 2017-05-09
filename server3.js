var http = require("http");

var port = 7500;

function handleRequest(request, reponse) {
    response.end("this may be a fault of yours?" + request.url);

}

var server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log("Server listening on: http://localhost:%s", port);
})