// Requiring path to so we can use relative routes to our HTML files
const express = require('express');
const db = require('../models');
var path = require('path');
const router = express.Router();
//use isLoggedin in the route for the booking confirmation screen
//e.g:
// app.get("/members", isAuthenticated, function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/members.html"));
//   });
var isLoggedin = require("../config/middleware/isLoggedin.js");

router.get("/", (req, res) => {
    db.Room.findAll({}).then(function (dbRoom) {
        let roomCards = {
            cards: dbRoom
        };
        console.log(roomCards)
        res.render("index", roomCards);
    });
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/signup.html"));
});

router.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/login.html"));
});

router.get("/booking/:room_number", isLoggedin, (req, res) => {

    var room_number = req.params.room_number;

    db.Room.findOne({
        where: {
            room_number: room_number
        }
    }).then(function (dbRoom) {

        console.log(dbRoom);

        let namePlates = {
            namePlates: dbRoom
        };
        console.log(namePlates)
        res.render("booking", namePlates);
    });
});

router.get("/success", isLoggedin, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/success.html"))
})

module.exports = router;