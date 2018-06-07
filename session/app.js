var express = require("express");
var app = express();

var cookie = require("cookie-parser");
var session = require("express-session");

app.use(cookie());
app.use(session({secret:"abcd789123"}));

app.listen(3000,function(){
console.log("working");
});

var counter = 0;

app.get("/",function (req,res){
	counter++;
	res.send("<h1>"+counter+"</h1>");
	// --------------FIRST-----------
	// if(!req.session.check)
	// {
	// 	counter++;
	// 	req.session.check=true;
	// }
	// --------------SECOND-----------

	// if(!req.session.total)
	// {
	// 	req.session.total=1;
	// }
	// else
	// {
	// 	req.session.total++;	
	// }

	// res.send("<h1>"+req.session.total+"</h1>");


	
});
