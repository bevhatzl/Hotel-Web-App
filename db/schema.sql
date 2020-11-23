DROP DATABASE IF EXISTS hotel_db;

CREATE database hotel_db;

USE hotel_db;

--if is_admin is true then they're login data should take them to admin page--
CREATE TABLE user (
    user_id INT NOT NULL AUTO_INCREMENT,
    email VARCHAR(25) NOT NULL,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    has_booking BOOLEAN DEFAULT false,
    PRIMARY KEY (user_id)
)

CREATE TABLE room (
    room_number INT NOT NULL,
    room_name VARCHAR(25) NOT NULL,
    bed_type VARCHAR(25) NOT NULL,
    room_desc VARCHAR(120) NOT NULL,
    room_cost DECIMAL(10,2) NOT NULL,
    is_booked BOOLEAN DEFAULT false,
    PRIMARY KEY (room_number)
)

CREATE TABLE reservation (
    reservation_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NULL,
    room_number INT NULL,
    PRIMARY KEY (reservation_id)
) 