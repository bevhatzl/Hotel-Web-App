const express = require('express');
const db = require('../models');
const passport = require('../config/passport');
const router = express.Router();
//POST for user data
// 1. arrival date 
// 2. edit the reservations table
// 3. Need room ID
// 4. User ID need

// When hit book now POST DATA to table, then GET DATA to booking.hmtl
//need to add the passport local strategy thing, this is a new module for the requirement
router.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
});

router.post("/api/signup", function (req, res) {
    console.log(req.body)
    db.User.create({
        email: req.body.email,
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        password: req.body.password,
        is_admin: req.body.isAdmin
    })
        //upon creating user, redirects to login api so the user is automatically logged in
        .then(function () {
            res.redirect(307, "/api/login");
        })
        .catch(err => {
            console.log(err);
            res.status(401).json(err);
        });
});

router.get("/api/rooms", function (req, res) {
    db.Room.findAll({}).then(res.json());
});

router.get("/api/user_data", function (req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Otherwise send back the user's name 
        res.json({
            first_name: req.user.first_name,
            last_name: req.user.last_name
        });
    }
});

router.post("/api/booking", function (req, res) {

    db.Reservation.create({
        arrival_date: req.body.arrival_date,
        depart_date: req.body.depart_date,
        num_night: req.body.num_night,
        User: req.body.UserId,
        Room: req.body.RoomId
    }).then(data => {
        console.log(data);

    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;

