var express = require("express");
var app = express();
var parser = require("body-parser");
var upload = require("express-fileupload");
var changename = require("./crypto");

app.use(parser());
app.use(upload());

app.get("/",function(req,res) {
	res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
var userfile = req.files.mynewfile;
var newname = changename.c(userfile.name);
userfile.mv(__dirname+"/uploads/"+newname);
res.redirect("/");
});
app.listen(3000);