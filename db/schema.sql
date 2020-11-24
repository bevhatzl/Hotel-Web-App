DROP DATABASE IF EXISTS hotel_db;

CREATE database hotel_db;

USE hotel_db;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(25) NOT NULL,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    has_booking BOOLEAN DEFAULT false,
<<<<<<< HEAD
    password VARCHAR(25) NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE rooms (
    id INT NOT NULL AUTO_INCREMENT,
=======
    PRIMARY KEY (user_id)
)

CREATE TABLE room (
    room_number INT NOT NULL,
>>>>>>> 8ff36d045ff8bdc1231a858aa25f54cd42cd229a
    room_name VARCHAR(25) NOT NULL,
    bed_type VARCHAR(25) NOT NULL,
    room_desc VARCHAR(120) NOT NULL,
    room_cost DECIMAL(10,2) NOT NULL,
    room_photo VARCHAR(200),
    is_booked BOOLEAN DEFAULT false,
<<<<<<< HEAD

    PRIMARY KEY (id)
);

CREATE TABLE reservations (
    user_number INT NULL,
    room_number INT NULL
=======
    PRIMARY KEY (room_number)
)

CREATE TABLE reservation (
    reservation_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NULL,
    room_number INT NULL,
    PRIMARY KEY (reservation_id)
>>>>>>> 8ff36d045ff8bdc1231a858aa25f54cd42cd229a
) 