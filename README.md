# Ejabberd Connector 
This is used to control an Ejabberd server over http REST using a node.js server.


## API Documentation

The requests are authenticated using a secret passed in the query parameters:
	id={secret}

POST http://{server address}/check-account:
* Input -- Json body with a single array parameter named "args".  The array should have 2 arguments -- user and host.
 
	POST http://heads.com:7564/check-account?id="secretAPICode"
	{
		"args" : [
			"butts",
			"heads.com"
		]
	}

* Output -- Json body with a single boolean "response" variable indicating if the account exists on the server.

	{
		"response" : true
	}

POST http://{server address}/check-password:
* Input -- Json body with a single array parameter named "args".  The array should have 3 arguments -- user, host, and password.
	
	POST http://heads.com:7564/check-password?id="secretAPICode" 
	{
		"args" : [
			"butts",
			"heads.com",
			"secretOfTheButts"
		]
	}

* Output -- Json body with a single boolean "response" variable indicating if the account/password are correct.

	{
		"response" : true
	}

POST http://{server address}/change-password:
* Input -- Json body with a single array parameter named "args".  The array should have 3 arguments -- user, host, and new password.
 
	POST http://heads.com:7564/change-password?id="secretAPICode"
	{
		"args" : [
			"butts",
			"heads.com",
			"secretOfTheButts"
		]
	}
	
* Output -- Json body with a single boolean "response" variable indicating if the password was successfully changed.

	{
		"response" : true
	}