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
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE rooms (
    id INT NOT NULL AUTO_INCREMENT,
    room_number INT NOT NULL,
    room_name VARCHAR(25) NOT NULL,
    bed_type VARCHAR(25) NOT NULL,
    room_desc VARCHAR(120) NOT NULL,
    room_cost DECIMAL(10,2) NOT NULL,
    room_photo VARCHAR(200),
    is_booked BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

CREATE TABLE reservation (
    reservation_id INT NOT NULL AUTO_INCREMENT,
    id INT NULL,
    room_number INT NULL,
    PRIMARY KEY (reservation_id)
) 