var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var port = 3000;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  database: "wishes_db",
  password: "Priyansh0518"
});

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
