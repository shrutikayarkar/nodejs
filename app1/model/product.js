var connect = require("../config/connect");
var config = require("../config/db");

module.exports.insert = function (obj,cb) {
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection('product').insert(obj,cb);

});
};


module.exports.find = function (cb) {
connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection('product').find().toArray(cb);

});
};



// module.exports.getAll=[
// 		{
// 			productName:"I-phone",
// 			productPrice:20000,
// 			imgUrl:"images/1.png"
// 		},
// 		{
// 			productName:"Kurta",
// 			productPrice:20000,
// 			imgUrl:"images/4.jpg"
// 		},
// 		{
// 			productName:"Watch",
// 			productPrice:20000,
// 			imgUrl:"images/5.jpg"
// 		},
// 		{
// 			productName:"Hair Dryer",
// 			productPrice:20000,
// 			imgUrl:"images/6.jpeg"
// 		},
// 		{
// 			productName:"Handbag",
// 			productPrice:20000,
// 			imgUrl:"images/7.jpg"
// 		}

// ];