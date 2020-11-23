// Requiring necessary npm packages
const express = require("express");
const fs = require("fs");
const path = require("path");

var app = express();
const PORT = process.env.PORT || 8000;


// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

//Code for routing
// Requiring our routes
require("./routes/html-routes.js")(app);

//Set Handlebars npm
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//Import api-routes to the server

const routes = require("./routes/api-routes");

app.use(routes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
