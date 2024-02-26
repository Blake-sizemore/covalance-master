CREATE SCHEMA node_connect;

USE node_connect;

CREATE TABLE users (
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, name, email) VALUES
(1, 'Mario', 'mario@nintendo.com'),
(2, 'Luigi', 'luigi@nintendo.com'),
(3, 'Peach', 'peach@nintendo.com'),
(4, 'Yoshi', 'yoshi@nintendo.com'),
(5, 'Bowser', 'bowser@nintendo.com'),
(6, 'Donkey Kong', 'donkeykong@nintendo.com'),
(7, 'Link', 'link@nintendo.com'),
(8, 'Zelda', 'zelda@nintendo.com'),
(9, 'Samus', 'samus@nintendo.com'),
(10, 'Kirby', 'kirby@nintendo.com');

SELECT * FROM users;

create user 'node-user'@'localhost' identified by 'pswd_node';
grant all privileges on node_connect.* to 'node-user'@'localhost';