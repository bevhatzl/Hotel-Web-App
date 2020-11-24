// var Hotel = require("../models/room.js");

// // Routes
// // =============================================================
// module.exports = function(app) {
//   // Get all Hotels
//   app.get("/api/all", function(req, res) {
//     Hotel.findAll({}).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get a specific Hotel
//   app.get("/api/:Hotel", function(req, res) {
//     Hotel.findAll({
//       where: {
//         title: req.params.Hotel
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all Hotels of a specific genre
//   app.get("/api/genre/:genre", function(req, res) {
//     Hotel.findAll({
//       where: {
//         genre: req.params.genre
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all Hotels from a specific author
//   app.get("/api/author/:author", function(req, res) {
//     Hotel.findAll({
//       where: {
//         author: req.params.author
//       }
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all "long" Hotels (Hotels 150 pages or more)
//   app.get("/api/Hotels/long", function(req, res) {
//     Hotel.findAll({
//       where: {
//         pages: {
//           $gte: 150
//         }
//       },
//       order: [["pages", "DESC"]]
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Get all "short" Hotels (Hotels 150 pages or less)
//   app.get("/api/Hotels/short", function(req, res) {
//     Hotel.findAll({
//       where: {
//         pages: {
//           $lte: 150
//         }
//       },
//       order: [["pages", "ASC"]]
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Add a Hotel
//   app.post("/api/new", function(req, res) {
//     console.log("Hotel Data:");
//     console.log(req.body);
//     Hotel.create({
//       title: req.body.title,
//       author: req.body.author,
//       genre: req.body.genre,
//       pages: req.body.pages
//     }).then(function(results) {
//       res.json(results);
//     });
//   });

//   // Delete a Hotel
//   app.delete("/api/Hotel/:id", function(req, res) {
//     console.log("Hotel ID:");
//     console.log(req.params.id);
//     Hotel.destroy({
//       where: {
//         id: req.params.id
//       }
//     }).then(function() {
//       res.end();
//     });
//   });
// };








// router.get("/api/rooms", function (req, res) {
  
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
          let roomCards = {
            cards: dbRoom
          };
            console.log(roomCards)
            res.render("index", roomCards); 
        });
    });
  };


  //POST for user data
  // 1. arrival date 
  // 2. edit the reservations table
  // 3. Need room ID
  // 4. User ID need

  // When hit book now POST DATA to table, then GET DATA to booking.hmtl
