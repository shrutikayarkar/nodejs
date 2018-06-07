var express = require("express");
var router = express.Router();

var pro = require("../model/product");
var cat = require("../model/category");

router.get("/",function (req,res) {
cat.find(function(err,result){
var pagedata = {title:"add product",pagename:"admin/addproduct",message:req.flash("msg"),catdata:result};
res.render("adminlayout",pagedata);
});
});

router.post("/",function(req,res){
pro.insert(req.body,function(err,result){
req.flash("msg","Successfully Added");
res.redirect("/admin/admin_add_product");
});

});


module.exports = router;