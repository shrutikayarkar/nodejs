var express = require("express");
var router = express.Router();  //same as var app=x();

router.get("/", function(req,res){
var pagedata={title:"signup page",pagename:"signup/index"}
res.render("layout",pagedata);
});



module.exports=router;