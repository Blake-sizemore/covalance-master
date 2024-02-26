/* Scalar verses Aggragated functions 
Aggragated ( mutiply data sets) = perform calculations on a set of rows and return a single output value,
Scalar (Singular data set) = perform calculations on a single row or value and return a single output value for each row.
*/ 

/* unknown scalar function
String: UPPER(), LOWER()
Mathfunctions: ABS(),ROUNDS(), 
date and time: NOW(), DATEDIFF()
*/

-- Common Aggragated Functions
/* count()
count(column_name);
count(distinct column_name);
*/

/*sum()
sum(column)
select sum(revenue) from sales
*/

/*avg()
avg(column_name)
select avg(price) from products
*/

/*min()
min(column_name)
select min(price) from grocery_list
*/

/*max()
max(column_name)
select max(price) from grocery_list
*/

-- GROUP BY 
-- perform calculations on specific groups of rows, providing more detailed insights into your data.

-- Aggregated func with group by
/* SELECT category, SUM(revenue) as total_revune 
from sales
group by category
*/

/* SELECT table, Avg(sales) as average_salary 
from column
group by category
*/

/* SELECT category, min(price) as min_price, max(price) as max_price  
from products
group by category
*/

/* SELECT category, min(price) as min_price, max(price) as max_price  
from products
group by category
*/

-- NULL + AGG FUNC
-- Count includes NULL in the total output as the other ignore count.