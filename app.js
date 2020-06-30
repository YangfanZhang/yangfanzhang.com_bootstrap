const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("about");
});

app.get("/projects", function(req, res){
    res.render("projects");
});

app.get("/passion", function(req, res){
    res.render("passion");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
})