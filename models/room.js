// const Sequelize = require("sequelize");
// // sequelize (lowercase) references my connection to the DB.
// // const sequelize = require("../config/connection.js");

// // Creates a "Book" model that matches up with DB
// let Hotel = sequelize.define("room", {
//   room_number: Sequelize.INTEGER,
//   room_name: Sequelize.STRING,
//   bed_type: Sequelize.STRING,
//   room_desc: Sequelize.STRING,
//   room_cost: Sequelize.DECIMAL,
//   room_photo: Sequelize.STRING,
//   is_booked: Sequelize.BOOLEAN
// });

// // Syncs with DB
// Hotel.sync();

// // Makes the Book Model available for other files (will also create a table)
// module.exports = Hotel;


module.exports = function (sequelize, DataTypes) {
    var Room = sequelize.define("Room", {
        room_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        room_name: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 25]
            },
            allowNull: false
        },
        bed_type: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 25]
            },
            allowNull: false
        },
        room_desc: {
            type: DataTypes.STRING,
            validate: {
                len: [1, 120]
            },
            allowNull: false
        },
        room_cost: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        room_photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        is_booked: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        timestamps: false
    });
    return Room;
};
