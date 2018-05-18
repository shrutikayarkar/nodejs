var express=require("express");
var app=express();

app.listen(3000,function(){
console.log("server running properly...");
});


//.....ALL USE CODES......

app.use(express.static(__dirname+"/public"));
app.use(require("./controller/default"));



//.....ALL SET CODES......

app.set("view engine" , "ejs");
app.set("views", "viewejs");	//viewejs is foldername where all ejs files held



