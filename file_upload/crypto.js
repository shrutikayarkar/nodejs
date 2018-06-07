var crypto = require("crypto");
module.exports.c = function (filename) {

	var x = crypto.randomBytes(12).toString("hex");

	// var filename = userfile.name;
	var arr= filename.split(".");
	var n = arr.length;
	var ext = arr[n-1];
	var newname = x+"."+ext;
	return newname;
};

