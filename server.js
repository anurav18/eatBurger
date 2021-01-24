var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = require("./controllers/burgerController");
app.use(router);

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "9503Hancockave!",
//   database: "burgers_db"
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }

//   console.log("connected as id " + connection.threadId);
// });

// Import routes and give the server access to them.
// var routes = require("./controllers/catsController.js");

// app.use(routes);

// app.get("/",function(req,res){
//   connection.query("Select * from burger",function(err,data){
//     if(err) throw err;
//     res.render("index",{burgers:data});
//   })
  
// })

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
