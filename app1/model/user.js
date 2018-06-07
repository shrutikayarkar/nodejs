var connect = require("../config/connect");
var config = require("../config/db");

module.exports.insert = function(obj,cb){

connect.init(function(err,client){
	if(err)
	{
		console.log("connection error",err);
		return;
	}

var database = client.db(config.dbName);
database.collection("user").insert(obj,cb);

});
};

module.exports.find = function(cb){

connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("user").find().toArray(cb);

});
};