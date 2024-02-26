CREATE SCHEMA nintendo_characters;
USE nintendo_characters;

CREATE TABLE characters (
id INT AUTO_INCREMENT,
name VARCHAR(50),
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

CREATE TABLE items (
id INT AUTO_INCREMENT,
name VARCHAR(50),
character_id INT,
created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id),
FOREIGN KEY (character_id) REFERENCES characters (id)
);

INSERT INTO characters (name) VALUES ('Star'),('Mario'),('Luigi'),('Peach'),('Koopa');
-- ERROR CODE: 2 
Select * from characters;

insert into items (name, character_id) values ('Super Mushroom',1),('Fire flower',2),('Green Shell',2),('Banana',3);

select 
items.*,
characters.name AS character_name
-- characters.id,
-- characters.name,
-- characters.created_at AS character_registration,
-- items.name AS item_name,
-- items.created_at AS items_registration
from items join characters on characters.id = items.character_id ORDER BY items.created_at DESC;

-- SELECT rebels.name, ships.ship_name
-- FROM rebels
-- JOIN ships
-- ON rebels.ship_id = ships.id;

Select 
i.*,
chars.name AS charname
from characters AS chars
join items AS i on chars.id = i.character_id;
