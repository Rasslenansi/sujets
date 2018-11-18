const express = require('express');
const session = require('express-sesion');
const ejs = require('ejs');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

//declare app and requirements
app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(session({secret:"laposte"}));

//creating the server
var server = require("http").createServer(app);

//connect to database
mongoose.connect("mongodb://localhost:27017/subjects");

//mongoose models
const contact = require('./models/contact');

// ##############[ Routes ]############
// index
app.get("/index", function (req,res) {
  contact.find({}, function (error,result) {
    if (error) res.render("error", {error:error});
    if (result) {
      res.render("index", {rattachements:contact.rattach, sujets:contact.domain})
    }else {
      res.render("index");
    }
  });
});
// admin
app.get("/admin", function (req,res) {
  if (req.session.admin) {
    res.render("profile.ejs");
  }
  else {
    res.render("login.ejs")
  }
});


//server listening
server.listen(80);
console.log("listening");

// search
var = require("socket.io")(server);
io.server.io("connection", function (socket) {
  socket.on("search", function (data) {
    var domain = data.domain;
    var rattach = data.rattach;
    bal.find({domain:domain, rattach:rattach}, function (error, contact) {
      if (contact) {
        socket.emit("found", contact);
      }
      if (error) {
        socket.emit("not_found");
      }
      else {
        socket.emit("failed");
      }
    });
  });
});
