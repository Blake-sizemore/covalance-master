CREATE SCHEMA pet_db;
USE pet_db;

CREATE TABLE pets (
id 	INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(60) NOT NULL,
species VARCHAR(60) NOT NULL,
age INT NULL,
owner VARCHAR(100) NOT NULL,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO pets (name, species, age, owner)
VALUE ('buddy','dog',2 , "Sarah Johnson");

INSERT INTO pets (name, species, age, owner)
VALUES ('buddy','dog',2 , "Sarah Johnson"),
('billy', 'hamster', 10, 'Henry Ball'),
('Ford','parrot',5,'Susan Masters');

UPDATE pets SET owner = "Harry Man" WHERE id=3;

DELETE FROM pets WHERE id = 3;

SELECT * FROM pets;

SELECT * FROM pets WHERE species = "hamster" ORDER BY age ASC;

SELECT * FROM pets ORDER BY id ASC LIMIT 5 OFFSET 5;

SELECT * FROM pets WHERE age >= 5 ORDER BY age DESC;

 