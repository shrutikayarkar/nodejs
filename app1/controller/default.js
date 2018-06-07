var express = require("express");
var router = express.Router();

router.use('/', require('./index')); 
router.use('/about',require('./about'));
router.use('/contact', require('./contact'));
router.use('/help', require('./help'));
router.use('/signup', require('./signup'));
router.use('/login', require('./login'));
router.use('/logout', require('./logout'));
router.use('/user', backdoor,require('./user'));

router.use('/admin', require('./admin'));
router.use('/admin/dashboard', admin_backdoor, require('./admindashboard'));
router.use('/admin/logout',require('./adminlogout'));
router.use('/admin/admin_add_category', admin_backdoor, require('./adminaddcategory'));
router.use('/admin/admin_view_category', admin_backdoor, require('./adminviewcategory'));
router.use('/admin/admin_add_product',require('./adminaddproduct'));
router.use('/admin/admin_view_product',require('./adminviewproduct'));

function backdoor(req,res,next)
{
if(!req.session.is_user_logged_in)
	{
		res.redirect("/login");
	}
	next();
}

function admin_backdoor(req,res,next)
{
if(!req.session.is_admin_logged_in)
	{
		res.redirect("/admin");
	}
	next();
}

module.exports=router;