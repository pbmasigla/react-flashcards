var express = require("express");
var app = express();

var allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	next();
};
app.use(allowCrossDomain);

app.get("/api/todos", function(req, res) {
	res.json({
		todos: [
			"wash car",
			"wash dog"
		]
	});
});

app.listen(3000, function(err) {
	if (err) {
		return console.log(err);
	}
	console.log("Server running on port 3000");
});
