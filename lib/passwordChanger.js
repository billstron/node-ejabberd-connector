// # passwordChanger.js
// Change the password for an account
//

var exec = require('child_process').exec;
var q = require("querystring");

module.exports = function(req, resp, next) {

	// try to get the arguments.
	try {
		var user = q.escape(req.body.args[0]);
		var host = q.escape(req.body.args[1]);
		var pwd = q.escape(req.body.args[2]);
	}
	// if it fails, throw an error
	catch (e) {
		resp.send(400, e.toString());
		return;
	}

	// construct the command
	// note: the concurrent flag is used in case more than one request comes in
	// at the same time
	var cmd = "ejabberdctl --concurrent change-password " + user + " " + host
			+ " " + pwd;
	console.log(cmd);

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
}
