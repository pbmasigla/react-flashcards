var koa = require("koa");
var app = koa();

app.use(function *() {
	this.body = "Hello koajs!";
});

app.listen(3000);
console.log("App listening on port 3000");
