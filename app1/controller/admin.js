var express = require("express");
var router = express.Router(); //same as var app=x();

router.get("/", function(req,res){
res.render("admin/index");
});

module.exports=router;