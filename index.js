const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("pages/index");
});

app.get("/about", function(req, res) {
  res.render("pages/about");
});

app.get("/resume", function(req, res) {
  res.render("pages/resume");
});

app.get("/projects", function(req, res) {
  res.render("pages/projects");
});

app.get("/videos", function(req, res) {
  res.render("pages/videos");
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000");
});

app.use(express.static(__dirname + "/public"));
