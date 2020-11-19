CREATE database hotel_db;

USE hotel_db;

--if is_admin is true then they're login data should take them to admin page--
CREATE TABLE user (
    user_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(25) NOT NULL,
    last_name VARCHAR(25) NOT NULL,
    is_admin BOOLEAN DEFAULT false,
    has_booking BOOLEAN DEFAULT false,

    PRIMARY KEY (user_id)
)

--not sure if im missing something vital--
CREATE TABLE room (
    room_id INT NOT NULL AUTO_INCREMENT,
    room_name VARCHAR(25) NOT NULL,
    room_cost DECIMAL(10,2) NOT NULL,
    room_capacity INT NOT NULL,
    is_booked BOOLEAN DEFAULT false,

    PRIMARY KEY (room_id)
)

--is this table necessary? could we do a join on the other two tables to get this info instead?--
--would we need to add foreign keys to those tables to do that?--
CREATE TABLE reservation (
    user_number INT NULL,
    room_number INT NULL
)