-- Drop the schema if it exists
DROP SCHEMA IF EXISTS super_smash_bros_schema;

-- Create the schema
CREATE SCHEMA super_smash_bros_schema;

-- Use the created schema
USE super_smash_bros_schema;

-- Table: Fighters
CREATE TABLE Fighters (
    fighter_id INT AUTO_INCREMENT PRIMARY KEY,
    fighter_name VARCHAR(50) NOT NULL,
    tier VARCHAR(10),
    debut_game VARCHAR(50)
);

-- Batch Insert into Fighters table
INSERT INTO Fighters (fighter_name, tier, debut_game) VALUES
    ('Mario', 'S', 'Super Mario Bros.'),
    ('Link', 'S', 'The Legend of Zelda'),
    ('Pikachu', 'A', 'Pokémon'),
    ('Donkey Kong', 'B', 'Donkey Kong'),
    ('Kirby', 'A', 'Kirby'),
    ('Samus', 'B', 'Metroid'),
    ('Fox', 'S', 'Star Fox'),
    ('Yoshi', 'A', 'Super Mario World'),
    ('Ness', 'B', 'EarthBound'),
    ('Captain Falcon', 'B', 'F-Zero');

-- Table: Moves
CREATE TABLE Moves (
    move_id INT AUTO_INCREMENT PRIMARY KEY,
    fighter_id INT,
    move_name VARCHAR(50) NOT NULL,
    move_type VARCHAR(20),
    damage INT,
    FOREIGN KEY (fighter_id) REFERENCES Fighters(fighter_id)
);

-- Batch Insert into Moves table
INSERT INTO Moves (fighter_id, move_name, move_type, damage) VALUES
    (1, 'Fireball', 'Projectile', 5),
    (2, 'Spin Attack', 'Melee', 8),
    (3, 'Thunder Jolt', 'Projectile', 3),
    (4, 'Giant Punch', 'Melee', 12),
    (5, 'Final Cutter', 'Melee', 10),
    (6, 'Charge Shot', 'Projectile', 9),
    (7, 'Blaster', 'Projectile', 2),
    (8, 'Egg Lay', 'Grab', 0),
    (9, 'PK Flash', 'Projectile', 15),
    (10, 'Falcon Punch', 'Melee', 25),
    (1, 'Super Jump Punch', 'Melee', 13),
    (1, 'Cape', 'Special', 2),
    (1, 'F.L.U.D.D.', 'Special', 0),
    (2, 'Boomerang', 'Projectile', 7),
    (2, 'Spin Attack (Aerial)', 'Melee', 9),
    (2, 'Bombs', 'Projectile', 12),
    (3, 'Skull Bash', 'Special', 10),
    (3, 'Quick Attack', 'Special', 6),
    (3, 'Thunder', 'Special', 15),
    (4, 'Headbutt', 'Melee', 8),
    (4, 'Spinning Kong', 'Melee', 12),
    (4, 'Giant Punch (Charged)', 'Melee', 25),
    (5, 'Hammer Flip', 'Melee', 14),
    (5, 'Stone', 'Special', 8),
    (5, 'Final Cutter (Aerial)', 'Melee', 10),
    (6, 'Missile', 'Projectile', 5),
    (6, 'Bomb', 'Projectile', 8),
    (6, 'Screw Attack', 'Melee', 10),
    (7, 'Reflector', 'Special', 3),
    (7, 'Fire Fox', 'Special', 10),
    (7, 'Shine', 'Special', 1),
    (8, 'Egg Toss', 'Projectile', 6),
    (8, 'Yoshi Bomb', 'Melee', 15),
    (8, 'Egg Roll', 'Melee', 7),
    (9, 'PK Fire', 'Special', 7),
    (9, 'Back Throw', 'Grab', 9),
    (9, 'Yo-Yo', 'Melee', 11),
    (10, 'Raptor Boost', 'Melee', 12),
    (10, 'Knee Smash', 'Melee', 18),
    (10, 'Falcon Dive', 'Melee', 14);
    
    delimiter $$
    create procedure select_all_fighters()
    begin
    Select * from fighters;
    end $$
    delimiter ;
    
    /* with drop which allows the params to change
    delimiter $$
    drop procedure if exist select_all_fighters $$
    create procedure select_all_fighters()
    begin
    Select * from fighters;
    end $$
    delimiter ; */
    
    call select_all_fighters();
    
    delimiter $$
    drop procedure if exists add_fighter $$
    -- IN is the default = input = param
    create procedure add_fighter(in _name varchar(50), in _tier varchar(10), in _debut_game varchar(50))
    begin
		insert into fighters (fighter_name, tier, debut_game) value (_name,_tier,_debut_game);
    end $$
    delimiter ;
    
    call add_fighter('Luigi', 'B', 'super mario bros');
    
    -- update fighter tier
    delimiter $$
    drop procedure if exists update_fighter_tier $$
    create procedure update_fighter_tier(IN _fighter_id INT,IN _new_tier varchar(10))
    begin
		update fighters set tier = _new_tier where fighter_id = _fighter_id;
    end $$
    delimiter ;
    
    call update_fighter_tier(11,'A');
    
      -- get fighter moves
    delimiter $$
    drop procedure if exists update_fighter_move $$
    create procedure update_fighter_move (IN _move_id int, in _move_name varChar(50),in _move_type varChar(20),in _damage int)
    begin
		update moves m 
        set move_name = _move_name, 
        move_type = _move_type, 
        damage = _damage 
        where move_id = _move_id;
    end $$
    delimiter ;
    
    select * from moves;
    call update_fighter_move(1,'Jump Attack','melee',3);