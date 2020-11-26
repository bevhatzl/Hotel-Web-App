'use strict'

const { Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    class Reservation extends Model {

        static associate(models) {
            Reservation.belongsTo(models.User);
            Reservation.belongsTo(models.Room)
        }
    }
    Reservation.init(
        {
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
        sequelize,
        modelName: 'Reservation',
    });

    return Reservation
};
