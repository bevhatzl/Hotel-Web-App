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

    const room_number = req.params.room_number;

    db.Room.findOne({
        where: {
            room_number: room_number
        }
    }).then(function (dbRoom) {

        const userData = {
            name: req.user.first_name + " " + req.user.last_name,
            email: req.user.email,
        };

        console.log(dbRoom);
        console.log(userData);

        let namePlates = {
            room_number: dbRoom.room_number,
            room_desc: dbRoom.room_desc,
            name: userData.name,
            email: userData.email
        };
        console.log(namePlates)
        res.render("booking", namePlates);
    });
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