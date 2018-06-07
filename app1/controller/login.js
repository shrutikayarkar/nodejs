var express = require("express");
var router = express.Router();  //same as var app=x();

var user = require("../model/user");

router.get("/", function(req,res){
var pagedata={title:"login page",pagename:"login/index",message:req.flash("msg"),message1:req.flash("msg1")};
res.render("layout",pagedata);
});


router.post("/",function(req,res){
var u = req.body.username;
var p = req.body.password;

user.find(function(err,result){
	if(result.length==0)
	{
		req.flash("msg","Invalid username");
		res.redirect('/login');
	}
	else
	{
		var data = result[0];
		if(data.password==p)
	{
		req.session.userid = data._id;
		req.session.full_name = data.full_name;
		req.session.is_user_logged_in = true;
		res.redirect("/user");
	}
		else
	{
		req.flash("msg1","Invalid password");
		res.redirect("/login");
	}
	}
});

});



module.exports = router;
