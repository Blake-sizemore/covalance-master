CREATE SCHEMA starwars;
USE starwars;

CREATE TABLE empire (
id INT PRIMARY KEY AUTO_INCREMENT,
names VARCHAR(50) NOT NULL,
species VARCHAR(50) NOT NULL,
affiliation VARCHAR(50) NOT NULL,
rank VARCHAR(50) NOT NULL,
created_at DATETIME DEFAULT NOW()
);

INSERT INTO empire (names,species,affiliation,rank)
VALUES
	("Darth Vader","Human","Galactic Empire","Sith Lord"),
("Grand Moff Tarkin","Human","Galactic Empire","Grand Moff"),
("Emperor Palpatine","Human","Galactic Empire","Emperor"),
("General Veers","Human","Galactic Empire","General"),
("Admiral Piett","Human","Galactic Empire","Admiral"),
("Captain Needa","Human","Galactic Empire","Captain");
UPDATE empire SET rank = "Private" WHERE id=3;
SELECT * FROM empire;
DELETE FROM empire WHERE id=8;