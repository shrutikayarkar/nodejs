var express=require("express");
var app=express();


var parser = require("body-parser");
var cookie = require("cookie-parser");
var session = require("express-session");
var flash = require("express-flash");
var cache = require("nocache")


//.....ALL SET CODES......
app.set("view engine" , "ejs");
app.set("views", "viewejs");	//viewejs is foldername where all ejs files held


//.....ALL USE CODES......
app.use(parser());
app.use(express.static(__dirname+"/public"));
app.use(cookie());
app.use(session({secret:"abcd123"}));
app.use(flash());
app.use(cache());

app.use(function(req,res,next){
res.locals.session=req.session;
next();
});

app.use(require("./controller/default"));



app.listen(process.env.PORT || 3000,function(){
console.log("server running properly...");
});


