// # ejabberd-connector.js
// Main server application exported by npm.

var express = require('express');
var accountAdder = require("./accountAdder.js");
var accountChecker = require("./accountChecker.js");
var passwordChecker = require("./passwordChecker.js");
var passwordChanger = require("./passwordChanger.js");

module.exports = function EjabberdConnector(secret, path) {

	this.secret = secret;
	this.app = express();
	var self = this;

	var authenticate = function(req, resp, next) {
		if (req.query.id == self.secret) {
			next();
		} else {
			resp.send(401, "UNAUTHORIZED, incorrect secret");
		}
	};

	this.app.configure(function() {
		self.app.use(express.logger());
		self.app.use(express.bodyParser());
		self.app.use(authenticate);
		self.app.use(self.app.router);
		self.app.use(function(req, resp, next) {
			resp.send(404, "Nothing at this resource");
		});
	});

	this.app.post(path + "/register", accountAdder);
	this.app.post(path + "/check-account", accountChecker);
	this.app.post(path + "/check-password", passwordChecker);
	this.app.post(path + "/change-password", passwordChanger);

	this.start = function(port) {
		this.app.listen(port);
	};
};
