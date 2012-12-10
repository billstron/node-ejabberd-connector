// # accountChecker.js
// Check for an account on the system.
// 

var exec = require('child_process').exec;
var q = require("querystring");

module.exports = function(req, resp, next) {

	// try to get the arguments.
	try {
		var user = q.escape(req.body.args[0]);
		var host = q.escape(req.body.args[1]);
		var pass = q.escape(req.body.args[2]);
	}
	// if it fails, throw an error
	catch (e) {
		resp.send(400, e.toString());
		return;
	}

	// construct the command
	// note: the concurrent flag is used in case more than one request comes in
	// at the same time
	var cmd = "ejabberdctl --concurrent register " + user + " " + host + " " + pass;
	console.log(cmd);

	// send the response
	// return resp.send(200, {
	// response : true
	// });

	// try to do the command
	try {
		// execute the command
		var child = exec(cmd, function(err, stdout, stderr) {
			// create the default output
			var out = {
				response : true
			};
			// if the error is set, the response is modified
			if (err) {
				out.response = false;
			}
			// send the response
			resp.send(200, out);
		});
	}
	// if it fails, throw an error
	catch (e) {
		resp.send(400, e.toString());
	}
};
