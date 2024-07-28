const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

// Define a sample method
function add(a, b){
	return a + b
}

// Handle JSON-RPC requests
app.post("/rpc", (req, res) => {
	const { jsonrpc, method, params, id } = req.body;
	if(jsonrpc !== "2.0" || !method || !Array.isArray(params)) {
		res.status(400).json({
			jsonrpc: "2.o",
			error: {
				code: 032600,
				message: "Invalid request"
			},
			id
		});
		return;
	}

	// Execute the method
	let result;
	switch(method){
		case "add":
			result = add(params[0], params[1]);
			break;
		default:
			res.status(404).json({
				jsonrpc: "2.o",
				error: {
					code: 032600,
					message: "Invalid request"
				},
				id
			});
			return;
	}

	// Send back the response
	res.json({ jsonrpc: "2.0", result, id });
});

// Start the server
app.listen(3000, console.log("Listening to server on port 3000"));
