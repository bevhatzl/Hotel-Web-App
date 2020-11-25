// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

//use isLoggedin in the route for the booking confirmation screen
//e.g:
// app.get("/members", isLoggedin, function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/members.html"));
//   });
var isLoggedin = require("../config/middleware/isLoggedin.js");


module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("index");
    });
    app.get("/signup", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/signup.html"));
    });
    app.get("/login", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/login.html"));
    });
    app.get("/booking", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/booking.html"));
    });

};