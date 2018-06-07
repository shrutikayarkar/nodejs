var connect = require("../config/connect");
var config = require("../config/db");

module.exports.insert = function(obj,cb) {
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("category").insert(obj,cb);

});

}

module.exports.find = function(cb){
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection("category").find().toArray(cb);

});

}













// var getAll=[
// 		{
// 			category:"clothing"	
// 		},

// 		{
// 			category:"accessories"	
// 		},

// 		{
// 			category:"watches"	
// 		},
					
// 		{
// 			category:"home decor"
// 		},

// 		{
// 			category:"footwear"
// 		}
// ]
// module.exports = getAll;
