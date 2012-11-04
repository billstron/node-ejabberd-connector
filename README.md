# Ejabberd Connector 
This is used to control an Ejabberd server over http REST using a node.js server.


## API Documentation

The requests are authenticated using a secret passed in the query parameters:
	id={secret}

{server address}/check-account:
	POST:
		- Input -- Json body with a single array parameter named "args".  The array should have 2 arguments -- user and host.
			Example: 
				POST http://heads.com:7564/check-account?id="secretAPICode"
				{
					"args" : [
						"butts",
						"heads.com"
					]
				}
		- Output -- Json body with a single boolean "response" variable indicating if the account exists on the server.
			Example:
				{
					"response" : true
				}

{server address}/check-password:
	POST:
		- Input -- Json body with a single array parameter named "args".  The array should have 3 arguments -- user, host, and password.
			Example:
				POST http://heads.com:7564/check-password?id="secretAPICode" 
				{
					"args" : [
						"butts",
						"heads.com",
						"secretOfTheButts"
					]
				}
		- Output -- Json body with a single boolean "response" variable indicating if the account/password are correct.
			Example:
				{
					"response" : true
				}

{server address}/change-password:
	POST:
		- Input -- Json body with a single array parameter named "args".  The array should have 3 arguments -- user, host, and new password.
			Example: 
				POST http://heads.com:7564/change-password?id="secretAPICode"
				{
					"args" : [
						"butts",
						"heads.com",
						"secretOfTheButts"
					]
				}
		- Output -- Json body with a single boolean "response" variable indicating if the password was successfully changed.
			Example:
				{
					"response" : true
				}