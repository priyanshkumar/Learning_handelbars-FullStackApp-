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

connection.connect(function(err) {
  if (err) throw err;
});

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
  connection.query("Select * from wishes", function(err, result) {
    if (err) throw err;

    res.render("list", { data: result });
  });
});

app.post("/newWish", function(req, res) {
  connection.query(
    "insert into wishes(wish) value(?)",
    [req.body.wish],
    function(err, result) {
      if (err) throw err;

      res.send("Inserted Succesfully");
    }
  );
});
app.listen(port, function() {
  console.log(`port running on ${port}`);
});
