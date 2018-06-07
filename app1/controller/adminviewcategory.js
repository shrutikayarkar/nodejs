var express = require("express");
var router = express.Router();

var cat = require("../model/category");

router.get("/",function(req,res) {
cat.find(function(err,result){
var pagedata = {title:"view category",pagename:"admin/viewcategory",data:result};
res.render("adminlayout",pagedata);

});
});

module.exports = router;