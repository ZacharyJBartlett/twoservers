var http = require("http");

var port = 7000;

function handleRequest(request, reponse) {
    response.end("I guess this is a good thing" + request.url);

}

var server = http.createServer(handleRequest);

server.listen(port, function() {
    console.log("Server listening on: http://localhost:%s", port);
});