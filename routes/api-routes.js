var db = require("../models");
var passport = require("../config/passport");

module.exports = function (app) {

    //need to add the passport local strategy thing, this is a new module for the requirement
    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    app.post("/api/signup", function (req, res) {
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

    app.get("/api/rooms", function (req, res) {
        db.Room.findAll({}).then(function (dbRoom) {
            res.json(dbRoom);
            console.log(dbRoom)
        });
    });

    app.get("/api/user_data", function (req, res) {
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

    app.post("/api/booking", function (req, res) {

    })
}


