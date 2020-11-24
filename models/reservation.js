const User = require("./user.js");
const Room = require("./room.js");

module.exports = function (sequelize, DataTypes) {
    var Reservation = sequelize.define("Booking", {
        arrival_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        depart_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        num_night: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });

    Reservation.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' });

    Reservation.belongsTo(Room, { foreignKey: 'room_number', targetKey: 'room_number' });

    return Reservation;
};
