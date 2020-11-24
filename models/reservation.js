module.exports = function (sequelize, DataTypes) {
    var Reservation = sequelize.define("Booking", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        room_number: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
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
    return Reservation;
};