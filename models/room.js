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
    });
    return Room;
};
