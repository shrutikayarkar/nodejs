var express = require("express");
var app = express();

var parser = require("body-parser");

app.set("view engine","ejs")
app.set("views","views");

app.use(parser());

app.listen(3000,function() {
	console.log("running!!!!!")
});

app.get("/",function(req,res){

//to require mongodb module
var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";


//to establish connectivity
mongo.connect(url,function(err,client){
	if(err)
		{
			console.log("connection error", err);
			return;
		}
//TO SELECT DATABASE 
var database = client.db("dummydb");

//TO SELECT DATA OR TABLE FROM DATABASE
database.collection("student").find().toArray(function(err,result){
	if(err)
	{

		console.log("query error",err);
	}
	// console.log(result);
	var pagedata = {data:result};
	res.render("index",pagedata);

});
});
});

app.post("/",function(req,res){

var mongo = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongo.connect(url,function(err,client){
	if(err)
	{
		console.log("connection error",err);
		return;
	}

var database = client.db("dummydb");

database.collection("student").insert(req.body,function(err,result){
	if(err)
	{
		console.log("query error", err);
		return;
	}
console.log("...........",result);
res.redirect("/");
});

});

});