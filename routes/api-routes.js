//module.exports = function (app) {

const express = require("express");
const router = express.Router();

let hotel = require("../models/room.js");

router.get("/", function(req, res) {
    hotel.all(function(value) {
        let cardObject = {
            room_name: value,
            room_desc: value,
            bed_type: value,
            room_cost: value
        };
        res.render("index", cardObject);
    });
});





router.get("/api/rooms", function (req, res) {
        db.Room.findAll({}).then(function (dbRoom) {
            res.json(dbRoom);
            console.log(dbRoom)
        });
    });