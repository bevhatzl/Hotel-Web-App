// Requiring necessary npm packages
const express = require("express");
const fs = require("fs");
const path = require("path");
const passport = require("passport");
const db = require("./models");


var app = express();
const PORT = process.env.PORT || 8000;


// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(passport.initialize());
app.use(passport.session());

//Code for routing
// Requiring our routes


//Set Handlebars npm
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import api-routes to the server

//const routes = require("./config/connection.js");

require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// Starts the server to begin listening
// =============================================================
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});
