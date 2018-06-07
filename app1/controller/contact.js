var express = require("express");
var router = express.Router(); //same as var app=x();

router.get("/", function(req,res){
	// if(req.session.is_user_logged_in)
	// {
	// 	check = true;
	// }
	// else
	// {
	// 	check = false;
	// }
var pagedata = {title:"contact page",pagename:"contact/index"};
res.render("layout",pagedata);
});


module.exports=router;