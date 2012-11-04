// # server.js
// Creates a server that connects with ejabberd
// 

var connector = require("../index.js");

var port = 8082;
var path = "";
var secret = "butts123";

var app = new connector(secret, path);

app.start(port);