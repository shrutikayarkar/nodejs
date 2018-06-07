var express = require("express");
var router = express.Router();  //same as var app=x();

var user = require("../model/user");

router.get("/", function(req,res){
var pagedata={title:"signup page",pagename:"signup/index"}
res.render("layout",pagedata);
});


router.post("/",function(req,res){


user.insert(req.body,function(err,result){
	if(err)
	{
		console.log("query error", err);
		return;
	}
console.log("...........",result);
// res.redirect("/");
res.redirect('/login');

});

});



module.exports=router;