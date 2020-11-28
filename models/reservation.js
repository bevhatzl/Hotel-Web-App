'use strict'

const { Model } = require("sequelize");

module.exports = function (sequelize, DataTypes) {
    class Reservation extends Model {

        static associate(models) {
            Reservation.belongsTo(models.User)
            Reservation.belongsTo(models.Room)
        }
    }
    Reservation.init(
        {
            arrival_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            depart_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            num_night: {
                type: DataTypes.INTEGER,
                allowNull: true,
            }
        }, {
        timestamps: false,
        sequelize,
        modelName: 'Reservation',
    });

    return Reservation
};
