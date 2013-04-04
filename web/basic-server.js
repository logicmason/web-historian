var http = require("http");
var myStuff = require("./request-handler");

var port = 8000;
var ip = "127.0.0.1";
var server = http.createServer(myStuff.handleRequest);
console.log("Listening on http://" + ip + ":" + port);
server.listen(port, ip);

