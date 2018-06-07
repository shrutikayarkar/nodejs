var express = require("express");
var router = express.Router();

router.get("/",function (req,res) {
var pagedata = {title:"dashboard",pagename:"admin/dashboard"};
	res.render("adminlayout",pagedata);

});

module.exports = router;