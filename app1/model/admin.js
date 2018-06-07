var connect = require("../config/connect");
var config = require("../config/db");

module.exports.find = function (obj,cb) {

connect.init(function(err,client){
var database = client.db(config.dbName);
database.collection('admin').find(obj).toArray(cb);
});
};