var express = require("express");
var router = express.Router();

var pro = require("../model/product");

router.get("/",function(req,res) {
pro.find(function(err,result){
var pagedata = {title:"view category",pagename:"admin/viewproduct",data:result};
res.render("adminlayout",pagedata);

});
});

module.exports = router;