module.exports = function (app) {

    app.get("/api/rooms", function (req, res) {
        db.Room.findAll({}).then(function (dbRoom) {
            res.json(dbRoom);
            console.log(dbRoom)
        });
    });

}