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

// router.get("/booking", isLoggedin, (req, res) => {
//     db.Reservation.findOne({ where: { user_id: req.user_id } }).then(function (dbReservation) {
//         let namePlates = {
//             namePlates: dbReservation
//         };
//         console.log(namePlates)
//         res.render("booking", namePlates);
//     });
// });

router.get("/success", isLoggedin, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/success.html"))
})

module.exports = router;