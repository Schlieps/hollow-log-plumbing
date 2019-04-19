var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/products", function(req, res){
    res.render("products");
});

app.get("/services", function(req, res){
    res.render("services");
});

app.get("/contact", function(req, res){
    res.render("contact");
});

app.get("/sitemap", function(req, res){
    res.render("sitemap");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
    console.log("HollowLog Server Has Started");
});