// init project
const express = require("express");
const ejs = require("ejs");
const app = express();

// make all the files in 'public' available
app.use(express.static(__dirname+"/public"));

// set the view engine
app.set("view engine", "ejs");
app.set("views", [__dirname + "/views", __dirname + "/views/Education_and_Train", __dirname + "/views/Mission_and_Team", __dirname + "/views/Research", __dirname + "/views/Services"]);

// load routes
const route = require("./routes.js");

// use routes
app.use(route);

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
