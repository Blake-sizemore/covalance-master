/*ONE TO ONE: TABLE */
CREATE TABLE address (
    id INT PRIMARY KEY,
    street VARCHAR(50),
    city VARCHAR(50),
    state VARCHAR(50),
    zip VARCHAR(50)
);

CREATE TABLE person (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    address_id INT UNIQUE,
    FOREIGN KEY (address_id)
        REFERENCES address (id)
);

/* ONE TO MANY 
TWO TABLE Relation */
CREATE TABLE author (
id INT PRIMARY KEY,
name VARCHAR(50),
);

CREATE TABLE book (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    author_id INT,
    FOREIGN KEY (author_id)
        REFERENCES author (id)
);

/*MANY TO MANY: Table relation
THREE TABLES*/  
CREATE TABLE student (
id INT PRIMARY KEY,
name VARCHAR(50),
);

CREATE TABLE class (
id INT PRIMARY KEY,
title VARCHAR(50),
);

CREATE TABLE enrollment (
    id INT PRIMARY KEY,
    student_id INT,
    class_id INT,
    FOREIGN KEY (student_id)
        REFERENCES student (id),
    FOREIGN KEY (class_id)
        REFERENCES class (id)
);

/*OR*/ 

CREATE TABLE enrollment (
id INT PRIMARY KEY,
student_id Int,
class_id Int,
PRIMARY KEY (student_id, class_id)
FOREIGN KEY (student_id) REFERENCES student(id),
FOREIGN KEY (class_id) REFERENCES class(id)
); 

/*HOW TO ALTER KEY*/ 
ALTER TABLE orders
ADD CONSTRAINT fk_orders_customers
FOREIGN KEY (customer_id) References customer(customer_id);
/*or*/  
ALTER TABLE orders
FOREIGN KEY (customer_id) References customer(customer_id);

/* JOIN Statement
joining from two or more tables on A RELATED column between them */

/*INNER JOIN 
SELECT column1, column2, ...
FROM table1
INNER JOIN table2 - JOIN = INNER JOIN
ON table1.column = table2.column;*/
SELECT rebels.name, ships.ship_name
FROM rebels
JOIN ships
ON rebels.ship_id = ships.id;

/* LEFT JOIN,RIGHT JOIN, FULL OUTER JOIN*/

/*  FROM - RIGHT JOIN*/
SELECT rebels.name, ships.ship_name
FROM rebels
RIGHT JOIN ships
ON rebels.ship_id = ships.id;

/*  FROM - LEFT JOIN*/
SELECT rebels.name, ships.ship_name
FROM rebels
LEFT JOIN ships
ON rebels.ship_id = ships.id;

/*  FROM - OUTER JOIN*/
-- Needs UNION operator
SELECT rebels.name, ships.ship_name
FROM rebels
LEFT JOIN ships
ON rebels.ship_id = ships.id
UNION
SELECT rebels.name, ships.ship_name
FROM rebels
RIGHT JOIN ships
ON rebels.ship_id = ships.id
WHERE rebels.name is NULL;

/* ALIASES: thing AS alias thing 
-- ALT Name for table and column names, use in case of LONG NAME
-- column name common
*/
-- tables 
SELECT c.customer_name, o.order_date
FROM customer AS c
JOIN orders AS o
ON c.customers_id = o.customer_id;

-- columns
SELECT customers_name AS name, (total_cost * 0.10) AS discount
FROM orders
JOIN customers
ON orders.