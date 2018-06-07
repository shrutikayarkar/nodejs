var express = require("express");
var router = express.Router(); 

var cat = require("../model/category");
var pro = require("../model/product");

router.get("/", function(req,res){
cat.find(function(err,result){
pro.find(function(err,result1){
var pagedata={data:result,data1:result1,pagename:"index/index",title:"home page"};
res.render("layout",pagedata);
	});

});

});

module.exports=router;