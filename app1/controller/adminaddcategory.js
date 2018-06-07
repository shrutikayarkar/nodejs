var express = require("express");
var router = express.Router();

var cat = require("../model/category");

router.get("/",function(req,res) {
var pagedata = {title:"add category",pagename:"admin/addcategory",message:req.flash("msg")};
res.render("adminlayout",pagedata);
});

router.post("/",function(req,res){
cat.insert(req.body,function(err,result){
req.flash("msg", "Successfully Added");
res.redirect("/admin/admin_add_category");
console.log(result);
});

});

module.exports = router;