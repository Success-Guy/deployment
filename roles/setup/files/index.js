var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world!<br>I'm Abiodun Sam");
});
server.listen(80);