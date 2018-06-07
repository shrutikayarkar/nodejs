var express = require("express");
var app = express();
var parser = require("body-parser");
var upload = require("express-fileupload");
var crypto = require("crypto");

app.use(parser());
app.use(upload());


app.get("/",function(req,res) {
	res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
// console.log(req.files);
var userfile = req.files.mynewfile;

	var x = crypto.randomBytes(12).toString("hex");
	var filename = userfile.name
	var arr= filename.split(".");
	var n = arr.length;
	var ext = arr[n-1];
	var newname = x+"."+ext;
	// return newname;

userfile.mv(__dirname+"/uploads/"+newname);
// res.send("<h1>FILE UPLOADED</h1>");
res.redirect("/");
});



app.listen(3000);
