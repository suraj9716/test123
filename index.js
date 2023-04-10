var arr = [
    {
      "id": 1,
      "questionName": "First Letter A",
      "description": "Print all details of Customers whose first name starts with A",
      "query": "select * from customers where firstname like 'a%';"
    },
    {
      "id": 2,
      "questionName": "First Order Date",
      "description": "Print the date on which the first order was placed",
      "query": "select min(orderdate) from orders;"
    },
    {
      "id": 3,
      "questionName": "D Or G In The Name",
      "description": "Print the names of Customers whose FirstName consists of the letter Z or LastName consists of the letter K. Order your output in alphabetical order of FirstName. For Customers with same FirstName, order such rows in alphabetical order of LastName.",
      "query": "select firstname,lastname from customers where firstname like'%Z%' or lastname like'%K%' order by firstname, lastname;"
    },
    {
      "id": 4,
      "questionName": "Dry Fruits & Berries",
      "description": "Get the SUM of Market Price of all Products belonging to Type Dry Fruits & Berries",
      "query": "select sum(market_price) from products where type= Dry Fruits & Berries"
    },
    {
      "id": 5,
      "questionName": "Select Country Orders",
      "description": "Identify Countries which had number of orders placed by their customers to be between 100 and 200. Print Country in alphabetical order followed by count of Orders.",
      "query": "select c.country, count(o.orderid) from customers c join orders o on c.customerid = o.customerid group by c.country having count(o.orderid) between 100 and 200 order by country;"
    },
    {
      "id": 6,
      "questionName": "57100'S Spends",
      "description": "Print the average spend per order and the total spend across all orders, made by Customer with ID 57100.",
      "query": "select Avg(total_order_amount) ,sum(total_order_amount) from orders where customerid ='57100';"
    },
    {
      "id": 7,
      "questionName": "Fresho's Average Prices",
      "description": "Print the average sale price and the average market price of products produced by the Brand Fresho.",
      "query": "select avg(sale_price),avg(market_price) from products where brand like 'Fresho';"
    },
    {
      "id": 9,
      "questionName": "Customer Age",
      "description": "Categorize the Customers into 2 classes based on Year of Birth",
      "query": "select customerid, firstname, lastname, case when year(date_of_birth) < 1995 then 'Old' when year(date_of_birth) >= 1995 then 'Young' end as category from customers order by customerid;"
    },
    {
      "id": 10,
      "questionName": "Indian Suppliers",
      "description": "Each order contains different bunch of products. Each of these products are supplied by different suppliers.",
      "query": "select o.orderdate,count(distinct o.orderid) from orders o,orderdetails od , suppliers s where od.orderid = o.orderid and od.supplierid = s.supplierid and s.country like '%india%' group by o.orderdate order by o.orderdate desc;"
    },
    {
      "id": 11,
      "questionName": "Highest Value And The Order Counts",
      "description": "Print the order date followed by the highest order value and the number of orders placed on that particular date. Sort the result in descending order of Order Count.",
      "query": "select orderdate, max(total_order_amount), count(orderid) from orders group by orderdate order by count(orderid) desc;"
    },
    {
      "id": 12,
      "questionName": "Ch In The Name",
      "description": "Write a Query to Print the position of the substring ‘ch’ in the First Names of all Customers. Print the CustomerID, First Name, Position of substring 'ch' in First Name. Sort the result in ascending order of CustomerID.",
      "query": "select customerid, firstname, locate('ch', firstname) from customers order by customerid asc;"
    },
    {
      "id": 13,
      "questionName": "Customers Entered",
      "description": "Write a query to find the number of customers who entered each year. Print the year and the count of customers who entered in that year. Order by year.",
      "query": "select year(dateentered),count(customerid) from customers group by year(dateentered) order by year(dateentered);"
    },
    {
      "id": 15,
      "questionName": "Shipping Delayed",
      "description": "Write a query to find all the Order IDs which took equal to or more than 5 days to ship after the order was placed.",
      "query": "select o.orderID, p.productID, p.product , datediff(shipdate,orderdate) as differ from orders o inner join orderdetails d inner join products p where o.orderid = d.orderid and d.productid = p.productid having differ >= 5 order by o.orderid, p.productid;"
    },
    {
      "id": 18,
      "questionName": "City Difference",
      "description": "Identify and print the difference between the total number of occurances of city names in the database and the number of unique city names in the database.",
      "query": "select count(city)-count(distinct city) from customers;"
    },
    {
      "id": 20,
      "questionName": "Discounts",
      "description": "Calculate the amount of discount applied on each product using the sale and market prices of each product listed in the database",
      "query": "select productid, product, sale_price, market_price,floor(100-sale_price*100/market_price) as per from products order by productid;"
    },
    {
      "id": 21,
      "questionName": "Pairs Of 5500",
      "description": "Identify and print pairs of products which have the same sale price. Print the names of the products with same sale price in the first two columns",
      "query": "select p.product,p1.product,p.sale_price from products p,products p1 where p.productid != p1.productid and p.sale_price>= 5500 and p.sale_price = p1.sale_price order by p.product;"
    },
    {
      "id": 22,
      "questionName": "Monthly Counts",
      "description": "Write a query to show the number of customers, number of orders placed, and total order amount per month in the year 2021",
      "query": "select monthname(o.orderdate), sum(o.total_order_amount), count(o.orderid), count(distinct o.customerid) from orders o where year(o.orderdate)=2021 group by monthname(o.orderdate) order by count(distinct o.customerid);"
    },
    {
      "id": 23,
      "questionName": "Top 3 Shipper Companies",
      "description": "Write a query to find the top 3 Shipper companies with lowest average delivery time. Print the company name along with the average delivery time in days",
      "query": "select s.companyname, avg(datediff(o.deliverydate, o.orderdate)) as av from orders as o inner join shippers as s on s.shipperid = o.shipperid group by s.companyname order by av asc limit 3;"
    },
    {
      "id": 24,
      "questionName": "Months With Highest Customer Acquisition",
      "description": "Write a query to find the top 3 months with the highest customer acquisition. Print the months in string format like January, February,etc along with the count of customers entered in that month",
      "query": "select monthName(dateEntered)as month , count(customerid) as count from customers group by month order by count desc limit 3;"
    },
    {
      "id": 25,
      "questionName": "Order Amount In Festive Season",
      "description": "Write a query to find the total order amount in each year during the festive season(Consider festive season to be September,October and November months). Order your query based on year asc",
      "query": "select year(orderdate) year, sum(total_order_amount) from orders  where month(orderdate) in (9,10,11) group by year(orderdate);"
    },
    {
      "id": 26,
      "questionName": "Quarter Wise Customer Acquisition",
      "description": "Write a query to find the number of customers who entered each quarter. Print the quarter and the count of customers who entered in that quarter. Order by quarter",
      "query": "select quarter(dateEntered) as quarter,count(*) as count from customers group by quarter order by quarter;"
    },
    {
      "id": 27,
      "questionName": "Averaging 30000",
      "description": "Identify customers whose average spend across orders is greater than 30000 bucks.",
      "query": "select c.customerid,c.firstname,c.lastname,cast(avg(o.total_order_amount) as signed) as avarage_amount from customers c inner join orders o on c.customerid=o.customerid group by c.customerid having avarage_amount >30000 order by customerid;"
    },
    {
      "id": 28,
      "questionName": "Same DayName",
      "description": "Identify the orders that were ordered, shipped and delivered on the same dayname. For example if an order was ordered on a sunday, shipped on a sunday and delivered on a sunday",
      "query": "select * from orders where dayname(shipdate) = dayname(orderdate) and dayname(deliverydate) =dayname(shipdate) order by orderid;"
    },
    {
      "id": 29,
      "questionName": "First Order",
      "description": "Write a query to find the first order date of each Customer. Print CustomerID, First Name, Last Name and first order date. Sort the result in ascending order of Customer ID",
      "query": "select c.customerid,c.firstname,c.lastname,min(o.orderdate) from customers c inner join orders o on c.customerid = o.customerid group by customerid order by customerid;"
    },
    {
      "id": 30,
      "questionName": "New Names",
      "description": "Print the concatenation of Customer's First and Last Names in Upper Case",
      "query": "select customerid , concat(upper(left(firstname , 2)),upper( lastname)) as name from customers where length(concat(upper(left(firstname , 2)),upper( lastname))) > 12;"
    },
    {
      "id": 31,
      "questionName": "Monthly Orders Less Than 100",
      "description": "Print the Month Number and number of orders ordered in that particular month for each of the months of the year 2020. Consider the Dates from OrderDate for this calculation",
      "query": "SELECT MONTH(ORDERDATE),COUNT(*) as s FROM ORDERS WHERE YEAR(ORDERDATE) = 2020 GROUP BY MONTH(ORDERDATE) HAVING s < 100 ORDER BY MONTH(ORDERDATE) ASC;"
    },
    {
      "id": 32,
      "questionName": "525 Orders In 2021",
      "description": "Identify the Shippers who shipped more that or equal to 525 orders that were placed in the Year 2021.",
      "query": "select * from (select s.shipperid, s.companyname, count(orderid) as count from orders o inner join shippers s on o.shipperid = s.shipperid where year(o.orderdate) = 2021 group by s.shipperid order by s.shipperid) as data where count >= 525;"
    },
    {
      "id": 33,
      "questionName": "Baby - Not By JB",
      "description": "Identify the products whose names consists of the word 'Baby'.Then count the number of such products for each Category and Sub Category Type.",
      "query": "select l.category_id,c.categoryname,l.sub_category,count(l.product) from products l inner join category c on l.category_id=c.categoryid where l.product like '%baby%' group by c.categoryName,l.sub_category order by l.category_id asc,l.sub_category asc;"
    },
    {
      "id": 34,
      "questionName": "3 Day Rolling Sum Preceding",
      "description": "Write a query to find the 3 day rolling sum of the total order amount of all the orders for each shipper sorted in ascending order of OrderID",
      "query": "select orderid,shipperid,total_order_amount,sum(total_order_amount) OVER(PARTITION BY shipperid order by orderid ROWS BETWEEN 2 PRECEDING AND CURRENT ROW) AS RollingSum from orders order by shipperid ASC,orderid ASC;"
    },
    {
      "id": 36,
      "questionName": "No Tables",
      "description": "Print the following result set with the help of a SQL Query. You cannot use create table syntax!",
      "query": "values row(1, 'Piyush', 'Green'), row(2, 'Ajay', 'Blue'), row(3, 'Dhruv', 'Black');"
    },
    {
      "id": 38,
      "questionName": "First And Last",
      "description": "For each month of the year 2020, identify the first and the last order dates.",
      "query": "select monthname(orderdate),min(orderdate),max(orderdate) from orders where year(orderdate) = 2020 group by month(orderdate) order by orderdate;"
    },
    {
      "id": 39,
      "questionName": "May Days Of 2020",
      "description": "Identify the number of orders paid for using each payment type in the month of May of the year 2020",
      "query": "select p.paymentid,p.paymentType,count(o.paymentid) from payments p inner join orders o on o.paymentid = p.paymentid where month(o.orderdate) = 5 and year(o.orderdate) = 2020 group by p.paymentid order by p.paymentid;"
    },
    {
      "id": 40,
      "questionName": "Less Than 4600",
      "description": "Identify the number of times a supplier provided products across the different orders whose details are stored in the OrderDetails table.",
      "query": "select s.supplierid, s.companyname, count(o.productid) from suppliers s inner join orderdetails o on s.supplierid = o.supplierid group by o.supplierid having count(o.productid)<4600 order by s.supplierid;"
    },
    {
      "id": 43,
      "questionName": "State Difference",
      "description": "Identify and print the difference between the total number of occurances of state names in the database and the number of unique state names in the database.",
      "query": "select count(customerid)- count(distinct state) from customers;"
    },
    {
      "id": 44,
      "questionName": "N Destinations",
      "description": "Identify and print unique cities along with their state and country names that they belong to for all cities which are located in countries whose names start with the letter N. Sort the result in alphabetical order of City Names",
      "query": "select DISTINCT city, state,country from customers where country like 'n%' order by city;"
    },
    {
      "id": 45,
      "questionName": "Phone Number Counts",
      "description": "Identify the number of phone numbers in the database that start with the digits 6,7,8 and 9. Print the start digit (6,7,8,9) in the first column, followed by the count in the second column. Sort the result in ascending order count",
      "query": "SELECT LEFT(PHONE,1),COUNT(*) FROM CUSTOMERS WHERE PHONE LIKE '6%' OR PHONE LIKE '7%' OR PHONE LIKE '8%' OR PHONE LIKE '9%' GROUP BY LEFT(PHONE,1) ORDER BY COUNT(*);"
    },
    {
      "id": 46,
      "questionName": "Product Counts",
      "description": "Categorize all the different products on the basis of their market price. Classify all products whose price is less than 200",
      "query": "select CASE   WHEN market_price < 2000 THEN 'Affordable'   WHEN market_price between 2000 and 8000 THEN 'Mid Range'   WHEN market_price > 8000 THEN 'Costly'END AS category,count(*)from products group by category order by count(*) desc;"
    },
    {
      "id": 47,
      "questionName": "Basic Supplier Details",
      "description": "Print OrderDetailID, OrderID, Supplier Name, ProductID and Quantity of all data points from the order details table. Sort the result in ascending order of OrderDetailID.",
      "query": "select o.OrderDetailID, o.OrderID, s.companyName, o.ProductID, o.Quantity from orderDetails o inner join suppliers s on s.supplierID = o.supplierID order by o.orderDetailID;"
    },
    {
      "id": 48,
      "questionName": "June And July",
      "description": "Print month number followed by the count of customers born in that particular month. Only for the months of June and July.",
      "query": "select MONTH(Date_of_birth), count(*) from Customers where MONTH(Date_of_birth) =6 OR MONTH(Date_of_birth) =7 group by MONTH(Date_of_birth) order by count(*) desc;"
    },
    {
      "id": 49,
      "questionName": "No Beverages Allowed",
      "description": "Print ProductID, Product Name, Sub Category Name, Sale Price and Market Price of all products which do not fall under the Beverages Category. Sort the result in ascending order of ProductID",
      "query": "select productid,product,sub_category,sale_price,market_price from products where category_id != (select categoryid from category where categoryname = 'beverages') order by productid asc;"
    },
    {
      "id": 50,
      "questionName": "Card Details",
      "description": "Print OrderID, CustomerID, Payment Type, Total Order Amount for all orders which paid through by a card payment type. Sort the result in ascending order of OrderID",
      "query": "SELECT O.ORDERID, O.CUSTOMERID, P.PAYMENTTYPE, O.TOTAL_ORDER_AMOUNT FROM ORDERS O INNER JOIN PAYMENTS P ON O.PAYMENTID = P.PAYMENTID WHERE P.PAYMENTTYPE LIKE '%CARD%' ORDER BY O.ORDERID;"
    },
    {
      "id": 51,
      "questionName": "Roll Number 21 And Friends",
      "description": "You cannot use create table syntax - as CP does not allow you to",
      "query": "select 20 as Roll_no,'Ankit' as Name,55 as Marks UNION select 21,'Aman',68 UNION select 22,'Amit',76 order by Roll_no;"
    },
    {
      "id": 52,
      "questionName": "All Odds",
      "description": "Print OrderID, CustomerID, OrderDate, Order amount for all orders. We want the Order Amount to be an odd number.",
      "query": "SELECT OrderID, CustomerID, OrderDate, Total_order_amount, IF(Total_order_amount%2 = 1, Total_order_amount, Total_order_amount+1)FROM ordersORDER BY orderID;"
    },
    {
      "id": 53,
      "questionName": "Countries And Their Cities",
      "description": "Print all unique combinations of Cities and Countries the Customers belong to",
      "query": "select distinct city ,country from customers;"
    },
    {
      "id": 54,
      "questionName": "Mr Muscle",
      "description": "Print all the unique types under which the Brand 'Mr Muscle' has its products listed. Sort the result set in alphabetical order of Type.",
      "query": "select distinct(type) from products where brand ='mr muscle' order by type;"
    },
    {
      "id": 55,
      "questionName": "ATOMIC",
      "description": "Print the least and the highest sale_price amongst products sold by the Company ATOMIC",
      "query": "select min(sale_price), max(sale_price) from products where brand ='ATOMIC';"
    },
    {
      "id": 56,
      "questionName": "Mamaearth",
      "description": "Print the number of category and sub category under which Mamaearth sells its products",
      "query": "select count(distinct category_Id),count(distinct sub_category) from products where brand = 'Mamaearth';"
    },
    {
      "id": 57,
      "questionName": "Brussels, Hamburg, Australia",
      "description": "Print CustomerID, First Name, Last Name, City, State and Country details of customers who either belong to the city of Brussels or the state of Hamburg or the Country Australia. Sort the result set in ascending order of CustomerID",
      "query": "select customerid,firstname,lastname,city,state,country from customers where city = 'brussels' OR state = 'hamburg' OR country = 'australia' order by customerid asc;"
    },
    {
      "id": 58,
      "questionName": "57388'S Orders",
      "description": "Count the number of Orders placed by Customer with ID 57388.",
      "query": "select count(orderid) from orders where customerid = 57388;"
    },
    {
      "id": 59,
      "questionName": "Customer Total Spending",
      "description": "Print the details of customers (CustomerID, FirstName, LastName, City) along with the sum of their spending across all the orders they placed, for those customers whose total spent is greater than 350000",
      "query": "SELECT c.CustomerID, c.FirstName, c.LastName, c.City, sum(o.Total_order_amount) su FROM customers c INNER JOIN orders o on c.customerid=o.customerid group by c.customerid having sum(o.Total_order_amount)>350000 ORDER BY su desc;"
    },
    {
      "id": 60,
      "questionName": "Top 5 Categories",
      "description": "Identify top 5 categories which had the highest quantity of products ordered. Print Category ID, Category Name and Corresponding Total Quantity. Sort the result in descending order of Total Quantity.",
      "query": "select c.categoryid, c.categoryname, sum(o.quantity) from category c inner join products p on c.categoryid = p.category_id inner join orderdetails o on o.productid = p.productid group by c.categoryname order by sum(o.quantity) desc limit 5;"
    },
    {
      "id": 64,
      "questionName": "First 3 Payments",
      "description": "Get the count of orders and total revenue collected through payments with ID 1,2 and 3. Print PaymentID, Payment Type, Total Number of Orders, Total revenue collected. Sort the result in ascending order of PaymentID.",
      "query": "select p.paymentid,p.paymenttype,count(orderid),sum(o.total_order_amount) from payments as p join orders as o on o.paymentid = p.paymentid group by p.paymentid having paymentid = 1 or paymentid = 2 or paymentid = 3 order by p.paymentid asc;"
    },
    {
      "id": 65,
      "questionName": "No Sub Category",
      "description": "Print all details of Products which do not have any sub category assigned.",
      "query": "select * from products where sub_category is null order by productid asc;"
    },
    {
      "id": 66,
      "questionName": "Length Of First Names",
      "description": "Print the following table which depicts the length of first names in the customers table along with the corresponding count of such names",
      "query": "SELECT LENGTH(FIRSTNAME), COUNT(FIRSTNAME) FROM CUSTOMERS GROUP BY LENGTH(FIRSTNAME) ORDER BY LENGTH(FIRSTNAME);"
    },
    {
      "id": 68,
      "questionName": "Never Ordered",
      "description": "Print all details of Products which were never ordered in any of the orders.",
      "query": "select * from products where productid not in (select distinct productid from orderdetails) order by productid;"
    },
    {
      "id": 69,
      "questionName": "Lowest Transaction",
      "description": "Identify which was the lowest transaction value for each payment method. Print PaymentID, Payment Type and Lowest transaction value for that particular payment type",
      "query": "select p.paymentid, p.paymenttype, min(total_order_amount) from payments p left outer join orders o on p.paymentid = o.paymentid group by p.paymenttype order by p.paymentid;"
    },
    {
      "id": 70,
      "questionName": "Expensive Orders From Citiesn",
      "description": "Identiy top 5 cities from which the most expensive orders were placed. Print City followed by the Total Order Amount. Sort the resut set in descending order of Total Order Amount",
      "query": "select c.city, max(o.total_order_amount) from customers c inner join orders o on c.customerid=o.customerid group by c.city order by max(o.total_order_amount) desc limit 5;"
    },
    {
      "id": 71,
      "questionName": "Expensive Orders From Cities",
      "description": "Identiy top 5 cities from which the most expensive orders were placed. Print City followed by the Total Order Amount. Sort the resut set in descending order of Total Order Amount",
      "query": "select c.city, max(o.total_order_amount) from customers c inner join orders o on c.customerid=o.customerid group by c.city order by max(o.total_order_amount) desc limit 5;"
    },
    {
      "id": 72,
      "questionName": "Least Expensive Orders From Cities",
      "description": "Identiy top 5 cities from which the least expensive orders were placed. Print City followed by the Total Order Amount. Sort the resut set in ascending order of Total Order Amount",
      "query": "SELECT city, MIN(Total_order_amount) FROM Orders INNER JOIN Customers ON Orders.CustomerID=Customers.CustomerID group by city order by MIN(Total_order_amount) limit 5;"
    },
    {
      "id": 73,
      "questionName": "Greater Than 1000",
      "description": "Calculate the average sale price of products sold by each brand. Print Brand, Average Sale Price of Products. Filter to only print Brands whose average sale price of Products is greater than 1000",
      "query": "select p.brand , avg(p.sale_price) from products p group by brand having avg(p.sale_price) >1000 order by Brand;"
    },
    {
      "id": 74,
      "questionName": "Number of Products",
      "description": "Count the number of different products ordered in each order. Print OrderID, Count of Products in the order. Sort the result set in ascending order of OrderID",
      "query": "Select o.OrderID, Count(Distinct od.productId) AS Count_of_Products From Orders o Inner Join OrderDetails od ON o.orderId = od.orderId Group BY orderId Order By orderID;"
    },
    {
      "id": 75,
      "questionName": "Products Greater Than 8",
      "description": "Count the number of different products ordered in each order. Print OrderID, Count of Products in the order",
      "query": "Select o.OrderID, Count(distinct od.productId) AS CountofProducts from Orders o Inner Join OrderDetails od ON o.orderId = od.orderId Group BY orderId having count(productId) > 8 Order By orderID;"
    },
    {
      "id": 76,
      "questionName": "Quantity Greater Than 100",
      "description": "Calculate the total quantity of products per order irrespective of ProductID for each order. Print OrderID, Total Order Quantity. Filter to only print orders which have total quantity greater than 100. Sort the result set in ascending order of OrderID",
      "query": "Select o.OrderId , Sum(od.Quantity) From Orders o Left Join OrderDetails od ON o.orderId = od.orderId Group By o.orderId having Sum(od.Quantity) >100 Order by orderId;"
    },
    {
      "id": 77,
      "questionName": "Quantity Greater Than 48000",
      "description": "Calculate the total product quantity supplied by each supplier. Print Supplier ID, Total Quantity. Filter to only print Suppliers who shipped more than 48000 in quantity. Sort the result set in ascending order of SupplierID",
      "query": "Select s.SupplierId, Sum(o.Quantity) From Suppliers s Inner Join OrderDetails o ON o.SupplierId = s.SupplierId Group by s.supplierId having Sum(o.Quantity) > 48000 Order By s.supplierid;"
    },
    {
      "id": 78,
      "questionName": "Surname James",
      "description": "Count the number of Customers whose LastName is James",
      "query": "select count(customerid) from customers where lastname = 'james';"
    },
    {
      "id": 79,
      "questionName": "Understanding Customers",
      "description": "Print the Customers table, order output in descending order of CustomerID.",
      "query": "select * from customers order by customerid desc;"
    },
    {
      "id": 80,
      "questionName": "Customers From Germany",
      "description": "Count the number of Customers from Germany",
      "query": "select count(customerid) from customers where country ='germany';"
    },
    {
      "id": 81,
      "questionName": "A In The Name",
      "description": "Print details of all those customers whose first and last names contain the letter A",
      "query": "select * from customers where firstname like '%a%' and lastname like '%a%';"
    },
    {
      "id": 82,
      "questionName": "Least Order Amount",
      "description": "Least Order Amount",
      "query": "select min(total_order_amount) from orders;"
    },
    {
      "id": 83,
      "questionName": "First And Last Order Date",
      "description": "Print the first and the last order dates on which the orders were placed as stored in the database",
      "query": "select min(orderdate), max(orderdate) from orders;"
    },
    {
      "id": 84,
      "questionName": "Total Revenue - 2",
      "description": "Print the total revenue made by the company that was received though paymentid 2",
      "query": "select sum(Total_order_amount) from orders where paymentid=2;"
    },
    {
      "id": 85,
      "questionName": "Total Revenue",
      "description": "Print the total revenue made by the company",
      "query": "select sum(Total_order_amount) from orders;"
    },
    {
      "id": 86,
      "questionName": "Average Order Amount",
      "description": "Print the average total order amount across all orders in the database",
      "query": "select avg(total_order_amount) from orders;"
    },
    {
      "id": 87,
      "questionName": "Customers With IDs",
      "description": "Print all details of customers whose IDs lie in the range 57282 and 57304",
      "query": "select * from customers where customerid between 57282 and 57304;"
    },
    {
      "id": 88,
      "questionName": "Jonathan Calvin",
      "description": "Print all details of Customer with the name Jonathan Calvin",
      "query": "select * from customers where firstname = 'jonathan' and lastname ='calvin';"
    },
    {
      "id": 89,
      "questionName": "Customers From India",
      "description": "Print all details of customers from India",
      "query": "select * from customers where country ='india';"
    },
    {
      "id": 90,
      "questionName": "Number Of Customers In The Database",
      "description": "Identify the number of customers whose details we have stored in the database",
      "query": "select count(customerid) from customers;"
    },
    {
      "id": 91,
      "questionName": "Understanding Basic Customer Details",
      "description": "Print the CustomerID, FirstName, LastName, Email, City, Country for each customer in the same order of column names as mentioned. Order your output in ascending order of CustomerID",
      "query": "select CustomerID, FirstName, LastName, Email, City, Country from customers order by customerid asc;"
    },
    {
      "id": 92,
      "questionName": "Customer Phone Numbers",
      "description": "Print details of all customers whose phone numbers start with 7. Order your output records in ascending order of Phone Number",
      "query": "select * from customers where phone like '7%' order by phone asc;"
    },
    {
      "id": 93,
      "questionName": "Customers With Phone Number",
      "description": "Print the number of customers whose Phone Number starts with 8",
      "query": "select count(customerid) from customers where phone like '8%';"
    },
    {
      "id": 94,
      "questionName": "Countries",
      "description": "Print unique Countries that the customers belong to. Order output in alphabetical order of Country Name",
      "query": "select distinct country from customers order by country asc;"
    },
    {
      "id": 95,
      "questionName": "All Cities",
      "description": "Print all the unique City names the customers belong to, order output in alphabetical order of City name.",
      "query": "select DISTINCT(city) from customers order by city;"
    },
    {
      "id": 96,
      "questionName": "M Cities",
      "description": "Print all the unique City names the customers belong to which start with the letter M, order output in alphabetical order of City name.",
      "query": "select DISTINCT(city) from customers where city like 'm%' order by city;"
    },
    {
      "id": 97,
      "questionName": "C And E In The Name",
      "description": "Print the Firstname and LastName of Customers whose FirstName consists of the letter C and LastName consists of the letter E. Order your output in alphabetical order of FirstName.",
      "query": "select firstname, lastname from customers where firstname like '%c%' and lastname like '%e%' order by firstname, lastname;"
    },
    {
      "id": 98,
      "questionName": "Number Of States",
      "description": "Count the number of different states the customers reside in",
      "query": "select count(distinct state) from customers;"
    },
    {
      "id": 99,
      "questionName": "Certain Orders",
      "description": "Print details of orders which have total order amount between 10000 and 20000 (both inclusive).Sort your output in ascending order of OrderID.",
      "query": "select * from orders where total_order_amount between 10000 and 20000 order by orderid asc;"
    },
    {
      "id": 100,
      "questionName": "Certain Payments",
      "description": "Print details of orders for which either of payment methods with ID 5 or 6 was used. Sort your output in descending order of Total_Order_amount",
      "query": "select * from orders where paymentid=5 or paymentid=6 order by total_order_amount desc;"
    },
    {
      "id": 101,
      "questionName": "Certain Orders - 2",
      "description": "Print details of orders which were shipped by shipper with ID 1 or which were paid by payment method with ID 4. Sort your output in ascending order of OrderID.",
      "query": "select * from orders where shipperid = 1 or paymentid = 4 order by orderid;"
    },
    {
      "id": 102,
      "questionName": "Certain Orders - 3",
      "description": "Print details of orders which either have Total Order Amount less than 5000 or which were shipped by shipper with ID 2. Sort your output in ascending order of OrderID.",
      "query": "SELECT * FROM ORDERS WHERE TOTAL_ORDER_AMOUNT<5000 OR SHIPPERID=2;"
    },
    {
      "id": 103,
      "questionName": "Products",
      "description": "Count the number of products whose details are stored in the database.",
      "query": "select count(productid) from products;"
    },
    {
      "id": 104,
      "questionName": "Product Brands",
      "description": "Print the list of different Brands whose product information in stored in the database. Sort the output in alphabetical order of Brand.",
      "query": "SELECT DISTINCT BRAND FROM PRODUCTS ORDER BY BRAND;"
    },
    {
      "id": 105,
      "questionName": "Product Types",
      "description": "Print the different Type under which each product is being identified. Sort the output in alphabetical order of Type.",
      "query": "SELECT DISTINCT TYPE FROM PRODUCTS ORDER BY TYPE ASC;"
    },
    {
      "id": 106,
      "questionName": "Certain Category",
      "description": "Print all details of products which belong to category with ID 5008. Sort the output in ascending order of ProductID.",
      "query": "SELECT * FROM PRODUCTS WHERE CATEGORY_ID=5008 ORDER BY PRODUCTID;"
    },
    {
      "id": 107,
      "questionName": "100 Bucks",
      "description": "Print all details of products which have sale price less than 100. Sort the output in ascending order of ProductID.",
      "query": "SELECT * FROM PRODUCTS WHERE SALE_PRICE <100 ORDER BY PRODUCTID;"
    },
    {
      "id": 108,
      "questionName": "Bakery Snacks",
      "description": "Print all details of products which belong to the sub category of 'Bakery Snacks'. Sort the output in ascending order of ProductID.",
      "query": "SELECT * FROM PRODUCTS WHERE SUB_CATEGORY = 'BAKERY SNACKS' ORDER BY PRODUCTID;"
    },
    {
      "id": 109,
      "questionName": "Amul Products",
      "description": "Count the number of Products sold by the brand Amul.",
      "query": "SELECT COUNT(PRODUCT) FROM PRODUCTS WHERE BRAND='AMUL';"
    },
    {
      "id": 110,
      "questionName": "Costly Products",
      "description": "Print all details of products whose market price is greater than 2000. Sort the output in ascending order of ProductID",
      "query": "Print all details of products whose market price is greater than 2000. Sort the output in ascending order of ProductID;"
    },
    {
      "id": 111,
      "questionName": "Mid Range Products",
      "description": "Print all details of Products whose market price ranges from 1000 to 2000 (Both inclusive). Sort the output in ascending order of ProductID.",
      "query": "SELECT * FROM PRODUCTS WHERE MARKET_PRICE BETWEEN 1000 AND 2000 ORDER BY PRODUCTID;"
    },
    {
      "id": 112,
      "questionName": "Perfume",
      "description": "Print all details of products whose name contains the word 'Perfume'. Sort the output in ascending order of ProductID",
      "query": "SELECT * FROM PRODUCTS WHERE MARKET_PRICE BETWEEN 1000 AND 2000 ORDER BY PRODUCTID;"
    },
    {
      "id": 113,
      "questionName": "Order 7657259",
      "description": "Get the total quantity of all products ordered for the Order with ID 7657259.",
      "query": "SELECT SUM(QUANTITY) FROM ORDERDETAILS WHERE ORDERID=7657259;"
    },
    {
      "id": 114,
      "questionName": "Supplier 4",
      "description": "Get the total quantity of all products supplied by supplier with ID 4.",
      "query": "SELECT SUM(QUANTITY) FROM ORDERDETAILS WHERE SUPPLIERID=4;"
    },
    {
      "id": 115,
      "questionName": "Greatest Quantity",
      "description": "Print the greatest quantity ordered for any product.",
      "query": "SELECT MAX(QUANTITY) FROM ORDERDETAILS;"
    },
    {
      "id": 116,
      "questionName": "Vowel Names",
      "description": "Print all details of Customers whose first names start with a vowel. Sort the output in ascending order of CustomerID",
      "query": "select * from customers where firstname regexp'^[aeiou]' order by customerid;"
    },
    {
      "id": 117,
      "questionName": "Ending With N",
      "description": "Print details of Customers whose first name and last name both end with the letter n. Sort the output in ascending order of CustomerID",
      "query": "select * from customers where firstname like '%n' and lastname like '%n' order by customerid;"
    },
    {
      "id": 118,
      "questionName": "Country Numbers",
      "description": "Find the number of customers belonging to each country. Print the country column first followed by the number of customers belonging to each country in the second column",
      "query": "SELECT COUNTRY, COUNT(*) FROM CUSTOMERS GROUP BY COUNTRY ORDER BY COUNTRY;"
    },
    {
      "id": 119,
      "questionName": "City, Country Numbers",
      "description": "Find the number of customers belonging to each city. Print City, Country and number of customers belonging to each city and country combination in your output.",
      "query": "SELECT CITY, COUNTRY, COUNT(*) FROM CUSTOMERS GROUP BY CITY ORDER BY CITY;"
    },
    {
      "id": 120,
      "questionName": "Payment Numbers",
      "description": "Count the number of times a payment method was used. Print the PaymentID and the Count in the output. Sort the result set in ascending order of PaymentiD.",
      "query": "SELECT PAYMENTID,COUNT(PAYMENTID) FROM ORDERS GROUP BY PAYMENTID ORDER BY PAYMENTID;"
    },
    {
      "id": 121,
      "questionName": "Order Quantities",
      "description": "Get the total quantity of all products ordered for each order. Print the columns OrderID and Total Quantity in the output. Sort the result set in ascending order of OrderID.",
      "query": "SELECT ORDERID, SUM(QUANTITY) FROM ORDERDETAILS GROUP BY ORDERID ORDER BY ORDERID;"
    },
    {
      "id": 122,
      "questionName": "Revenue Through Payments",
      "description": "Get the total revenue received through each payment method. Consider the Total Order Amount of orders to calculate the total revenue. Print the PaymentID and Total Revenue in your result",
      "query": "SELECT PAYMENTID, SUM(TOTAL_ORDER_AMOUNT) FROM ORDERS GROUP BY PAYMENTID ORDER BY PAYMENTID;"
    },
    {
      "id": 123,
      "questionName": "Certain Orders - 4",
      "description": "Print details of orders which either have Total Order Amount less than 2000 or greater than 90000. Sort your output in ascending order of OrderID",
      "query": "SELECT * FROM ORDERS WHERE TOTAL_ORDER_AMOUNT<2000 OR TOTAL_ORDER_AMOUNT>90000 ORDER BY ORDERID;"
    },
    {
      "id": 124,
      "questionName": "Shipping Orders",
      "description": "Get Shipper details along with the number of Orders shipped by them. Print ShipperID, CompanyName, Phone and Number of orders shipped. Sort the result set in ascending order of ShipperID",
      "query": "SELECT o.ShipperID, s.CompanyName, s.Phone, Count(o.ShipperId) From Orders o JOIN shippers s ON o.shipperid = s.shipperid Group by o.shipperId Order By o.shipperId;"
    },
    {
      "id": 125,
      "questionName": "Multiples of 5",
      "description": "Print the all columns from the Orders table except the PaymentID and ShipperID Columns, follow the same order in which the columns are arranged in the table. Filter your records to include only those customers whose CustomerID is a multiple of 5",
      "query": "Select orderId, CustomerId, OrderDate, ShipDate, DeliveryDate, Total_Order_Amount From orders Where customerId%5 = 0 Order by orderID"
    },
    {
      "id": 126,
      "questionName": "Order Payments",
      "description": "Get the details of the different payment methods along with the corresponding number of orders for which the payment methods were used",
      "query": "select p.paymentid, paymentType, allowed, count(orderid) from payments p Left join orders o on o.paymentId = p.paymentId group by p.paymentId order by p.paymentId;"
    },
    {
      "id": 127,
      "questionName": "Yearly New Customers",
      "description": "Identify the Number of customers whose details were entered into the database each year. Print Year, Count of Customers. Sort the result set in ascending order of Year.",
      "query": "Select Year(DateEntered), Count(customerId) From Customers Group By Year(DateEntered) Order By Year(DateEntered)"
    },
    {
      "id": 128,
      "questionName": "Monthly New Customers",
      "description": "Identify the Number of customers whose details were entered into the database each month of each year. Print Year, Month, Count of Customers",
      "query": "Select Year(DateEntered), Month(DateEntered), Count(CustomerId) AS Count_of_Customers From Customers Group By Year(DateEntered),Month(DateEntered) Order By Year(DateEntered),Month(DateEntered);"
    },
    {
      "id": 129,
      "questionName": "Monthly Orders",
      "description": "Identify the number of orders placed in each month of the year 2021. Print Month, Number of Orders. Sort the result set in ascending order of Month.",
      "query": "SELECT Month(OrderDate), COUNT(OrderID) AS Number_of_Orders FROM Orders Where YEAR(OrderDate) = '2021' Group BY Month(OrderDate) Order BY Month(OrderDate)"
    },
    {
      "id": 130,
      "questionName": "Monthly Revenue",
      "description": "Identify the revenue generated in each month of the year 2020. Print Month, Revenue Generated. Sort the result set in ascending order of Month.",
      "query": "SELECT Month( OrderDate ), SUM(Total_order_amount) AS Revenue_Generated FROM Orders o WHERE Year( OrderDate ) = '2020' Group by Month( OrderDate ) ORDER BY Month( OrderDate );"
    },
    {
      "id": 132,
      "questionName": "Monthly Average Spend",
      "description": "Identify the average order amount by each CustomerID in each month of Year 2020. Print CustomerID, Month, Average Order Amount",
      "query": "Select CustomerID, Month(OrderDate) AS Month, AVG(Total_order_amount) AS Average_Order_Amount FROM ORDERS Where Year(OrderDate) = 2020 Group By CustomerID, Month(OrderDate) ORder BY CustomerId, Month(OrderDate)"
    },
    {
      "id": 133,
      "questionName": "Highest Acquisition",
      "description": "Identify the Month-Year combination which had the highest customer acquisition. Print Month, Year, Number of Customers whose details were entered into the database.",
      "query": "Select Month(DateEntered),Year(DateEntered),Count(CustomerId) Number_of_Customer FROM customers Group by Year(DateEntered),Month(DateEntered) Order By Count(CustomerId) Desc limit 1"
    },
    {
      "id": 134,
      "questionName": "6 Orders",
      "description": "Print CustomerID, FirstName and LastName of Customers who placed equivalent to 6 orders. Sort the result set in ascending order of Customer ID.",
      "query": "select c.customerId, firstName, LastName from Customers c Inner join orders o on c.CustomerId = o.CustomerId group by c.CustomerId having count(c.CustomerId) = 6order by c.CustomerId;"
    },
    {
      "id": 135,
      "questionName": "1 Order",
      "description": "Print all details of the customer who ordered only once.",
      "query": "select c.*from Customers c Inner join orders o on c.CustomerId = o.CustomerId group by c.CustomerId having count(c.CustomerId) = 1;"
    },
    {
      "id": 136,
      "questionName": "Max Spend",
      "description": "Print CustomerID, FirstName, LastName, Email and the maximum they spent on a particular order. Sort the result set in ascending order of CustomerID.",
      "query": "select c.customerId , firstname, lastname, email, max(Total_order_amount) from customers c inner  join orders o on c.customerId = o.customerId group by o.customerId order by c.customerId;"
    },
    {
      "id": 137,
      "questionName": "Top 3 Countries",
      "description": "Identify Top 3 Countries whose customers placed the most orders. Print Country and Number of Orders. Sort the result set in descendng order of Number of orders.",
      "query": "select country, count(orderId) from customers c inner join orders o on c.customerID = o.customerID group by countryorder by count(orderId) desc limit 3;"
    },
    {
      "id": 138,
      "questionName": "Least Orders",
      "description": "Identify Top 3 Countries whose customers placed the least orders. Print Country and Number of Orders. Sort the result set in ascending order of Number of orders.",
      "query": "select country, count(orderId) from customers c inner join orders o on c.customerID = o.customerID group by countryorder by count(orderId) limit 3;"
    },
    {
      "id": 139,
      "questionName": "Top 5 Cities",
      "description": "Identify Top 5 cities whose customers placed the most orders. Print City, State, Country, Number of Orders in the result set. Sort the result set in descending order of Number of Orders.",
      "query": "select city, State, Country, count(orderId) from customers c inner join orders o on c.customerID = o.customerID group by cityorder by count(orderId) desc limit 5;"
    },
    {
      "id": 140,
      "questionName": "Top Ordered Products",
      "description": "Identify Top 3 Products which were ordered the most in quantity across all orders. Print ProductID, Product Name and corresponding total quantity. Sort the result set in descending order of total quantity",
      "query": "select p.ProductID, Product, sum(quantity)from orderDetails od inner join Products p on od.productId = p.productIdGroup by productIdorder by sum(quantity) desclimit 3;"
    },
    {
      "id": 141,
      "questionName": "Average Spending",
      "description": "Identify the average spend of customers across all orders placed by them. Print CustomerID, First Name, Last Name and Average Spend. Sort the result set in ascending order of Customer ID",
      "query": "select c.CustomerID, FirstName, LastName, avg(total_order_amount) from customers cInner join Orders o on c.customerId = o.customerIdgroup by c.customerIdorder by c.customerId;"
    },
    {
      "id": 142,
      "questionName": "Cheapest Spends",
      "description": "For each customer identify the order which had the least amount paid by them. Print CustomerID, FirstName, LastName,Total Order Amount. Sort the result set in ascending order of CustomerID",
      "query": "select c.CustomerID, FirstName, LastName, min(total_order_amount) from customers cInner join Orders o on c.customerId = o.customerIdgroup by c.customerIdorder by c.customerId;"
    },
    {
      "id": 143,
      "questionName": "Category Brands",
      "description": "Identify the count of brands whose products the company sells within each category. Order your output by categoryID. Print CategoryId",
      "query": "Select c.CategoryId, c.CategoryName, Count(Distinct p.brand) AS count_of_brands From Category c Inner Join Products p ON c.categoryId = p.category_Id Group by p.category_Id Order By c.CategoryId"
    },
    {
      "id": 144,
      "questionName": "Category - Sub Categories",
      "description": "Identify the count of sub category within each category. Order your output by categoryID",
      "query": "Select c.CategoryId, c.CategoryName, Count(Distinct p.sub_category) From Category c Inner Join Products p ON c.categoryId = p.category_Id Group by p.category_Id Order By c.CategoryId;"
    },
    {
      "id": 145,
      "questionName": "Highest Transaction",
      "description": "Identify which was the highest transaction value for each payment method. Print PaymentID, Payment Type and Highest transaction value",
      "query": "SELECT p.PaymentID, PaymentType, MAX(Total_order_amount)FROM orders o RIGHT JOIN payments p ON p.PaymentID = o.PaymentIDGROUP BY p.PaymentIDORDER BY p.PaymentID;"
    },
    {
      "id": 146,
      "questionName": "City Average Order Amount",
      "description": "Calculate the average order amount amongst orders placed from each city. Print City followed by the average order amount. Sort the result set in alphabetical order of City names",
      "query": "SELECT city, AVG(total_order_amount) FROM customers c INNER JOIN orders oON c.customerID = o.customerIDGROUP BY cityORDER BY city;"
    },
    {
      "id": 147,
      "questionName": "Product Categories",
      "description": "Identify number of products sold under each category. Print Category ID, Category Name and Number of products. Sort the result set in ascending order of Category ID.",
      "query": "SELECT c.CategoryId, c.CategoryName, Count(productID) FROM category c INNER JOIN products p ON c.categoryId = p.category_Id Group by p.category_Id Order By c.CategoryId"
    },
    {
      "id": 148,
      "questionName": "16th Order",
      "description": "Print all details of the 16th order placed by each customer if any. Sort the result set in ascending order of CustomerID",
      "query": "SELECT OrderID, CustomerID, PaymentID, OrderDate, ShipperID, Shipdate, DeliveryDate, Total_Order_AmountFROM(SELECT *, DENSE_RANK() OVER(PARTITION BY CustomerID ORDER BY OrderDate) as rnkFROM Orders) as cWHERE rnk = 16ORDER BY Customerid;"
    },
    {
      "id": 149,
      "questionName": "Shippers",
      "description": "Print all details of shippers whose details are stored in the database.",
      "query": "select * from shippers;"
    },
    {
      "id": 150,
      "questionName": "300 Bucks",
      "description": "Print all details of orders worth 300 in money value. Sort the result set in ascending order of OrderID.",
      "query": "select * from orders where total_order_amount =300 order by orderid asc;"
    },
    {
      "id": 151,
      "questionName": "Supplier Numbers",
      "description": "Print the count of suppliers whose details are stored in the database.",
      "query": "select count(supplierid) from suppliers;"
    },
    {
      "id": 152,
      "questionName": "Even Bucks",
      "description": "Print the count of Orders whose order value is an even number.",
      "query": "select COUNT(ORDERID) FROM ORDERS WHERE MOD(TOTAL_ORDER_AMOUNT,2) =0;"
    },
    {
      "id": 153,
      "questionName": "57083's Spends",
      "description": "Calculate the total money spent by customer with ID 57083 across all orders placed by them.",
      "query": "select sum(total_order_amount) from orders where customerId = 57083 ;"
    },
    {
      "id": 154,
      "questionName": "Surnames from Z",
      "description": "Identify and print the unique last names of customers whose details are stored in the database. Sort the result set in reverse alphabetical order of the Last Names.",
      "query": "SELECT DISTINCT lastname from customers order by lastname desc;"
    },
    {
      "id": 155,
      "questionName": "Four 9's",
      "description": "Print all details of Customers whose Phone Numbers consist of the digit 9 at least four times. Sort the result set in ascending order of Phone Number.",
      "query": "SELECT * from customers where phone LIKE '%9%9%9%9%' order by phone;"
    },
    {
      "id": 156,
      "questionName": "R in the Name",
      "description": "Print all details of customers whose first names are 4 letter words which start with the letter 'R'. Sort the result set in ascending order of CustomerID",
      "query": "select * from customers where firstname like 'R___' order by CustomerId;"
    },
    {
      "id": 157,
      "questionName": "Unique Dates",
      "description": "Print distinct combinations of Order Date, Shipping Date and Delivery Date of Orders. Sort the result result set in ascending order of OrderDate",
      "query": "select DISTINCT orderDate , shipDate, DeliveryDate from orders order by OrderDate;"
    },
    {
      "id": 158,
      "questionName": "10, 4, 3, 30000 Orders",
      "description": "Print all details of Orders which were placed by Customers whose ID is a multiple of 10, Payment method was payment with ID 4, Shipped by Shipper with ID 3",
      "query": "select * from orders where customerId % 10 = 0 AND paymentId = 4 AND ShipperId = 3 AND Total_order_amount > 30000 order by customerID desc;"
    },
    {
      "id": 159,
      "questionName": "Total and Average of 5,1 Orders",
      "description": "Print the total revenue generated and the average order amount of orders which were paid with payment method 5 and were shipped by shipper with ID 1",
      "query": "SELECT SUM(total_order_amount) , AVG(total_order_amount) FROM orders WHERE paymentId = 5 AND shipperID = 1;"
    },
    {
      "id": 160,
      "questionName": "Alphabetical Last Name",
      "description": "Print the Customer First Name which comes last according to the alphabetical order. Hint: Apply MAX function on the relevant column.",
      "query": "select max(firstname) from customers;"
    },
    {
      "id": 161,
      "questionName": "C's From Poland",
      "description": "Print CustomerID, First Name, Last Name, Date of Birth, City, State, Country and EmailID of Customers from the country Poland whose first and last names start with the letter C.",
      "query": "select CustomerID, FirstName, LastName, Date_of_Birth, City, State, Country, Email from customers where country = 'poland' and firstname like 'C%' and lastname like 'C%' order by customerId;"
    },
    {
      "id": 162,
      "questionName": "Battery Products",
      "description": "Print just the names of Products which contain the word 'Battery' in them. Sort the result set in ascending order of Product Names.",
      "query": "select product from products where product like '%Battery%' order by product;"
    },
    {
      "id": 163,
      "questionName": "Suppliers",
      "description": "Print all details of suppliers whose details are stored in the database. Sort the result in Alphabetical order of Company Name.",
      "query": "select * from suppliers order by companyname;"
    },
    {
      "id": 164,
      "questionName": "08-08-2021 Orders",
      "description": "Print all details of orders that were placed on the 8th of August 2021",
      "query": "select * from orders where orderdate ='2021-08-08' order by orderid;"
    },
    {
      "id": 165,
      "questionName": "Number Of Shippers",
      "description": "Print the count of shippers whose details are stored in the database.",
      "query": "select count(shipperid) from shippers;"
    },
    {
      "id": 166,
      "questionName": "Uneven Payments",
      "description": "Print all details of Orders which were placed using a payment method whose ID is not an even number. Sort the result in ascending order of OrderID.",
      "query": "select* from orders where paymentid%2=1 order by orderid;"
    },
    {
      "id": 167,
      "questionName": "PK Cities",
      "description": "Identify and print names of Cities whose names start with the letter P or with the letter K. Make sure to not print any duplicates. Sort the result set in alphabetical order of City names",
      "query": "select DISTINCT city from customers where city like 'p%' or city like 'k%' order by city;"
    },
    {
      "id": 168,
      "questionName": "7'S Belfast & New York",
      "description": "Print all details of customers whose postal code starts with the number 7 and who reside in the cities of Belfast or New York. Sort the result set in ascending order of CustomerID",
      "query": "SELECT * FROM CUSTOMERS WHERE POSTALCODE LIKE '7%' AND CITY ='Belfast' OR POSTALCODE LIKE '7%' AND CITY ='NEW YORK' ORDER BY CUSTOMERID;"
    },
    {
      "id": 169,
      "questionName": "9 To 8",
      "description": "Print CustomerID, First Name, Last Name, City, Email and Phone number of Customers whose Phone number starts with the digit 9 and ends with the digit 8",
      "query": "select customerid, firstname, lastname, city, email,phone from customers where phone like'9%' and phone like '%8';"
    },
    {
      "id": 170,
      "questionName": "4 With An A Or 5",
      "description": "Print all details of Customers whose first name is a 4 letter word which starts with the letter A or whose last name is a 5 letter word. Sort the result in ascending order of CustomerID.",
      "query": "select * from customers where length(firstname)=4 and firstname like 'a%' or length(lastname)=5 order by customerid;"
    },
    {
      "id": 171,
      "questionName": "Safe Harvest's Rice",
      "description": "Print all details of Products which contain 'Rice' in their names, are produced by the brand 'Safe Harvest' and whose market price is less than 85. Sort the result in ascending order of ProductID",
      "query": "select * from products where product like '%rice%' and brand = 'safe harvest' and market_price<85 order by productid;"
    },
    {
      "id": 172,
      "questionName": "William Lawson",
      "description": "Print all details of Customers whose last name is either Williams or Lawson and who reside in the United States. Sort the result set in ascending order of CustomerID.",
      "query": "SELECT * FROM CUSTOMERS WHERE LASTNAME='Williams' AND COUNTRY LIKE 'United States%' OR LASTNAME='Lawson' AND COUNTRY LIKE 'United States%' ORDER BY CUSTOMERID;"
    },
    {
      "id": 173,
      "questionName": ".COM Emails",
      "description": "Print the count of Suppliers whose contact email address ends with '.com' .",
      "query": "select count(supplierid) from suppliers where email like '%.com';"
    },
    {
      "id": 174,
      "questionName": "Dates Entered",
      "description": "Identify unique dates on which details of the customers were entered into the database. Sort the resut in descending order of Date Entered.",
      "query": "select DISTINCT dateEntered from customers order by dateEntered desc;"
    },
    {
      "id": 175,
      "questionName": "Orders With Customer Details",
      "description": "Print OrderID, CustomerID, FirstName, Email and Total Order Amount for all orders placed. Sort the result in ascending order of OrderID",
      "query": "SELECT O.ORDERID,O.CUSTOMERID,C.FIRSTNAME,C.EMAIL,O.TOTAL_ORDER_AMOUNT FROM ORDERS O INNER JOIN CUSTOMERS C ON C.CUSTOMERID = O.CUSTOMERID ORDER BY O.ORDERID ASC;"
    },
    {
      "id": 176,
      "questionName": "Portuguese Destinations",
      "description": "Identify and print unique city and states from Portugal. Sort the result in alphabetical order of City Names.",
      "query": "select DISTINCT city , state from customers where country = 'Portugal' order by city;"
    },
    {
      "id": 178,
      "questionName": "Supplier Continents",
      "description": "Identify the continent each of the suppliers are situated in, on the basis of their country. Print Supplier's Company Name, Country followed by the continent. Continents case should be as follows",
      "query": "select CompanyName,country,case when country = 'India' then 'Asia' when country = 'USA' then 'North America' when country = 'UAE' then 'Middle East' END as CONTINENT from suppliers order by CompanyName asc;"
    },
    {
      "id": 181,
      "questionName": "Same Birthdays",
      "description": "Count the number of Customers born on each date_of_birth that is listed in the database. Print date of birth followed by the count. Sort the result in descending order of Count.",
      "query": "select date_of_birth, count(date_of_birth) from customers group by date_of_birth order by count(date_of_birth) desc;"
    },
    {
      "id": 182,
      "questionName": "Suppliers Countries",
      "description": "Count the number of suppliers from each country. Print Country in alphabetical order followed by count.",
      "query": "select country , count(*) from suppliers group by country order by country;"
    },
    {
      "id": 183,
      "questionName": "620 Orders",
      "description": "Get the count of orders shipped by each shipper along with the total worth of goods shipped by them",
      "query": "select s.companyname,count(o.orderid),sum(o.total_order_amount) from orders o inner join shippers s on o.shipperid = s.shipperid group by s.shipperid having count(o.orderid) < 620 order by s.companyname;"
    },
    {
      "id": 184,
      "questionName": "A's in the Name",
      "description": "Write a Query to Print the position of the character ‘a’ in the First Names and Last Names of all Customers. Print the CustomerID, First Name, Position of Character a in First Name, Last Name",
      "query": "SELECT customerId , firstName , POSITION('a' in firstname), lastname , POSITION('a' in lastname) FROM customers ORDER BY customerId ASC;"
    },
    {
      "id": 185,
      "questionName": "Unique Names",
      "description": "Identify Unique First Names of Customers in the database. Print only the FirstName in the output sorted in alphabetical order",
      "query": "select DISTINCT(firstname) from customers order by firstname;"
    },
    {
      "id": 186,
      "questionName": "H & W Names",
      "description": "Identify Customers in the database whose first name starts with the letter H and last name starts with the letter W. Print all details of these customers",
      "query": "SELECT * FROM CUSTOMERS WHERE FIRSTNAME LIKE 'H%' AND LASTNAME LIKE 'W%' ORDER BY CUSTOMERID;"
    },
    {
      "id": 187,
      "questionName": "All Except H",
      "description": "Identify Customers in the database whose first name does not start with the letter H but last name starts with the letter W.",
      "query": "SELECT * FROM CUSTOMERS WHERE FIRSTNAME NOT LIKE 'H%' AND LASTNAME LIKE 'W%' ORDER BY CUSTOMERID;"
    },
    {
      "id": 188,
      "questionName": "All Beverages",
      "description": "Print ProductID, Product Name, Sale Price and Market Price of all products which fall under the Beverages Category. Sort the result in ascending order of ProductID",
      "query": "SELECT PRODUCTID, Product, Sale_Price, Market_Price FROM PRODUCTS WHERE Category_ID=(SELECT CATEGORYID FROM CATEGORY WHERE CATEGORYNAME='BEVERAGES') ORDER BY PRODUCTID;"
    },
    {
      "id": 189,
      "questionName": "2021'S Most Delivered",
      "description": "Identify and print top 5 months where the most orders were delivered across 2021. Print Month Name, followed the order count. Sort the result in descending order of Count",
      "query": "select MONTHNAME(DELIVERYDATE) AS MONTH, COUNT(ORDERID) AS COUNT FROM ORDERS WHERE YEAR(DELIVERYDATE) = 2021 GROUP BY MONTH ORDER BY COUNT DESC LIMIT 5;"
    },
    {
      "id": 190,
      "questionName": "Lowest And Highest",
      "description": "Get every customers lowest and highest transaction.print customerid, Highest transaction,lowest transaction. Sort the data by customerid asc",
      "query": "select c.customerid, max(o.total_order_amount), min(o.total_order_amount) from customers c inner join orders o on o.customerid=c.customerid group by c.customerid order by c.customerid;"
    },
    {
      "id": 191,
      "questionName": "Even Mobile, Odd Postal",
      "description": "Print all the customer details where postal code is odd and mobile number is even.",
      "query": "select * from customers where postalcode % 2 <> 0 & phone % 2 =0;"
    },
    {
      "id": 192,
      "questionName": "Count Dublin Customer",
      "description": "Count the number of customer from Dublin.",
      "query": "select count(*) from customers where city = 'dublin';"
    },
    {
      "id": 193,
      "questionName": "Brand Lizol",
      "description": "Get the Total Number of Records for Brand Lizol.",
      "query": "select count(*) from products where brand = 'Lizol';"
    },
    {
      "id": 194,
      "questionName": "Odd Postal Code",
      "description": "Print all the customer details where postal code is odd.",
      "query": "SELECT * FROM customers where postalcode % 2 <> 0;"
    },
    {
      "id": 195,
      "questionName": "Type Different",
      "description": "What is Unique type of product from products whose brand is Harpic order by type",
      "query": "select distinct(type) from products where brand='harpic' order by type;"
    },
    {
      "id": 196,
      "questionName": "Even Postal Code",
      "description": "Print all the customer details where postal code is even.",
      "query": "SELECT * FROM customers where postalcode % 2 = 0;"
    },
    {
      "id": 197,
      "questionName": "Present Age",
      "description": "Get the Present age of the each customer and sort the result in descending order of age.",
      "query": "select concat(c.firstname, ' ', c.lastname) as name, TIMESTAMPDIFF(year,c.date_of_birth,curdate()) as age from customers c order by age desc;"
    },
    {
      "id": 198,
      "questionName": "Consonant Name Start",
      "description": "Print all details of the product where product name start with consonant.",
      "query": "select * from products where product NOT IN('A');"
    },
    {
      "id": 199,
      "questionName": "Unique Row",
      "description": "find the number of row from orderdetails whose all columns have odd number",
      "query": "select count(productid) from orderdetails where orderdetailid%2=1 and orderid%2=1 and productid%2=1 and quantity%2=1 and supplierid%2=1;"
    },
    {
        "id": 200,
        "questionName": "2020'S Monthly Supplier Report",
        "description": "The values in the matrix represent total quantity of products supplied out to orders ordered through the different months of the year 2020. (Consider OrderDate)",
        "query": "SELECT YEAR(orderdate) as Year, MONTHNAME(orderdate) AS Mnth, SUM(if(SupplierId = 1, QUANTITY, null)) as supplier_1, SUM(if(SupplierId = 2, QUANTITY, null)) as supplier_2, SUM(if(SupplierId = 3, QUANTITY, null)) as supplier_3, SUM(if(SupplierId = 4, QUANTITY, null)) as supplier_4, SUM(if(SupplierId = 5, QUANTITY, null)) as supplier_5, SUM(if(SupplierId = 6, QUANTITY, null)) as supplier_6 FROM Orders o INNER JOIN OrderDetails od ON o.orderId = od.orderId GROUP BY YEAR(orderdate), MONTH(orderdate) HAVING Year = 2020;"
      },
      {
        "id": 201,
        "questionName": "Summarizing Country Orders",
        "description": "The values in the matrix represent total number of orders ordered from the different countries in the database through the different years and quarters. (Consider OrderDate) Sort the result in ascending order of Year, for records with same year, sort them in ascending order of Quarter.",
        "query": "select YEAR(orderdate) AS Year, QUARTER(orderdate) AS Quarter, sum(case when country = 'india' then 1 end) as India, sum(case when country = 'united states' then 1 end) as 'United States', sum(case when country = 'australia' then 1 end) as Australia, sum(case when country = 'switzerland' then 1 end) as Switzerland FROM orders o INNER JOIN customers c on o.customerid = c.customerid GROUP BY year,quarter;"
      },
      {
        "id": 202,
        "questionName": "Discounts",
        "description": "Calculate the amount of discount applied on each product using the sale and market prices of each product listed in the database",
        "query": "select productid, product, sale_price, market_price,floor(100-sale_price*100/market_price) as per from products order by productid;"
      },
      {
        "id": 203,
        "questionName": "Summarizing Quantities",
        "description": "The values in the matrix represent total quantity shipped by the shippers through the different years and quarters. (Consider ShipDate)",
        "query": "select year(o.shipdate) as year, quarter(o.shipdate) as quarter, sum(case when o.shipperid = 1 then od.quantity else null end ) as 'shipper_1', sum(case when o.shipperid = 2 then od.quantity else null end ) as 'shipper_2', sum(case when o.shipperid = 3 then od.quantity else null end ) as 'shipper_3', sum(case when o.shipperid = 4 then od.quantity else null end ) as 'shipper_4', sum(case when o.shipperid = 5 then od.quantity else null end ) as 'shipper_5', sum(case when o.shipperid = 6 then od.quantity else null end ) as 'shipper_6', sum(case when o.shipperid = 7 then od.quantity else null end ) as 'shipper_7', sum(case when o.shipperid = 8 then od.quantity else null end ) as 'shipper_8' from orders o inner join orderdetails od on o.orderid = od.orderid group by year,quarter order by year,quarter asc;"
      },
      {
        "id": 204,
        "questionName": "25 Days To Deliver",
        "description": "Identify the orders which were ordered in 2020 but delivered in 2021. Print all details of such orders along with the difference in days from the order date to the delivery date.",
        "query": "select orderid, customerid, paymentid, orderdate, shipperid,shipdate, deliverydate, total_order_amount, datediff(deliverydate, orderdate) from orders where datediff(deliverydate, orderdate)>=25 and (year(orderdate)=2020 and year(deliverydate)=2021) order by orderid asc;"
      },
      {
        "id": 205,
        "questionName": "3rd Favourite Product",
        "description": "The Products being the 3rd highest popular for his/her in terms of total quantity ordered out of all the orders he/she placed (There can be more than one products which have same number of quantity ordered for the 3rd highest popularity - consider them all in the output).",
        "query": "SELECT CustomerID, FirstName, LastName, Product FROM(  SELECT *, dense_rank() over(PARTITION BY CustomerID ORDER BY total_quantity DESC) as rnk  FROM  (  SELECT c.CustomerID, FirstName, LastName, p.Product, SUM(od.Quantity) as total_quantity  FROM Customers c  JOIN Orders o on c.CustomerID = o.CustomerID  JOIN OrderDetails od on o.OrderID = od.OrderID  JOIN Products p ON p.ProductID = od.ProductID  GROUP BY FirstName, LastName, p.Product  HAVING SUM(od.Quantity) > 10  ) t1 ) t2 WHERE rnk = 3 ORDER BY CustomerID, Product;"
      },
      {
        "id": 206,
        "questionName": "City Most Revenue",
        "description": "Identify the City from each country from which the most revenue was generated. Consider Total Order Amounts of the different orders to calculate the revenue from each city. Print Country, City, Number of orders from the city. Sort the result set in alphabetical order of Country names",
        "query": "Select country, City , Max(OrderCount) From    (SELECT c.Country, c.City , SUm(o.total_order_amount) As OrderCount     From Orders o    Inner Join  Customers c     On o.customerId = c.CustomerId     Group By c.Country , c.City     Order by c.Country , SUm(o.total_order_amount) Desc) As ansGroup By Country Order By country "
      },
      {
        "id": 207,
        "questionName": "Revenue 2020 and 21",
        "description": "Print the details of different payment methods along with the total amount of money transacted through them in the years 2020 and 2021. Print Payment Type, Allowed, Transaction value in 2020, Transaction value in 2021. Order your output in alphabetical order of Payment Type. Include all payment types that exist in the database.",
        "query": "SELECT PaymentType, Allowed, SUM(IF(YEAR(OrderDate) = 2020, Total_order_amount, null)), SUM(IF(YEAR(OrderDate) = 2021, Total_order_amount, null))FROM Payments p LEFT JOIN Orders oON p.paymentId = o.paymentIdGROUP BY PaymentTypeORDER BY PaymentType;"
      },
      {
        "id": 208,
        "questionName": "Summarizing City Revenue",
        "description": "The values in the matrix represent total sum of revenue generated out of orders ordered from the different cities in the database through the different years and quarters. (Consider OrderDate)",
        "query": "SELECT YEAR(orderdate) AS Year, QUARTER(orderdate) AS Quarter, sum(case when city = 'Geneva' then total_order_amount end) as 'Geneva', sum(case when city = 'Brisbane' then total_order_amount end) as 'Brisbane', sum(case when city = 'Chennai' then total_order_amount end) as 'Chennai', sum(case when city = 'San Francisco' then total_order_amount end) as 'San Francisco'FROM orders o INNER JOIN customers c on o.customerid = c.customerid GROUP BY Year, Quarter;"
      },
      {
        "id": 209,
        "questionName": "Supplying Pivot",
        "description": "The values in the matrix represent total sum of quantity of products supplied out to orders ordered through the different years and quarters. (Consider OrderDate)",
        "query": "SELECT YEAR(orderdate) as Year, QUARTER(orderdate) AS Quarter,SUM(if(SupplierId = 1, QUANTITY, 0)) as supplier_1,SUM(if(SupplierId = 2, QUANTITY, 0)) as supplier_2,SUM(if(SupplierId = 3, QUANTITY, 0)) as supplier_3,SUM(if(SupplierId = 4, QUANTITY, 0)) as supplier_4,SUM(if(SupplierId = 5, QUANTITY, 0)) as supplier_5,SUM(if(SupplierId = 6, QUANTITY, 0)) as supplier_6FROM Orders oINNER JOIN OrderDetails od ON o.orderId = od.orderIdGROUP BY YEAR(orderdate), QUARTER(orderdate)"
      },
    
      {
        "id": 210,
        "questionName": "Indian City Orders",
        "description": "Get the count of orders placed from each city and also get the total revenue generated from that city. Print City, State, Number of orders and revenue generated. Consider total order amount of orders to calculate the revenue generated. Only consider cities from India. Order by alphabetical order of City names",
        "query": "select c.city,c.state,count(o.customerid),sum(o.total_order_amount) from orders o inner join customers c on o.customerid = c.customerid where country = 'India' group by c.city order by c.city;"
      },
      {
        "id": 211,
        "questionName": "Quarterly Report",
        "description": "Calculate the Total Transaction Value processed and the Total Quantity of Products Shipped through the different quarters of the years 2020 and 2021",
        "query": "SELECT year(shipdate) as year, quarter(shipdate), sum(total_order_amount), sum(Quantity) FROM orders o INNER JOIN orderdetails odON o.orderID = od.orderIDGROUP BY year(shipdate), quarter(shipDate) HAVING year = 2020 or year = 2021 ORDER BY year(shipdate), quarter(shipdate);"
      },
      {
        "id": 212,
        "questionName": "25 Days To Deliver",
        "description": "Identify the orders which were ordered in 2020 but delivered in 2021.",
        "query": "SELECT ORDERID, CUSTOMERID, PAYMENTID, ORDERDATE, SHIPPERID,SHIPDATE, DELIVERYDATE, TOTAL_ORDER_AMOUNT,DATEDIFF(DELIVERYDATE, ORDERDATE) FROM ORDERS WHERE DATEDIFF(DELIVERYDATE, ORDERDATE)>=25 AND (YEAR(ORDERDATE)=2020 AND YEAR(DELIVERYDATE)=2021) ORDER BY ORDERID ASC;"
      },
      {
        "id": 213,
        "questionName": "Monthly Chart",
        "description": "Identify the number of orders, Total Revenue, Least Order Amount, Greatest order amount, Average order amount for each month of each year. Use the Total Order Amount of orders for all your calculations. Print Year, Month, number of orders, Total Revenue, Least Order Amount, Greatest order amount, Average order amount.",
        "query": "Select Year(OrderDate), Month(OrderDate), Count(OrderId), SUM(Total_order_amount), MIN(Total_order_amount), MAX(Total_order_amount) AS Greatest_order_amount, AVG(Total_order_amount) From Orders Group By Year(orderDate),Month(OrderDate) ORDER BY Year(orderDate),Month(OrderDate)"
      },
      {
        "id": 214,
        "questionName": "Types of Orders",
        "description": "Classify orders into 3 different categories. 'Regular Order' - when the order amount is less than or equal to 10,000. 'Not So Expensive Order' - when the order amount is less than or equal to 60,000 and greater than 10,000. 'Expensive Order' - when the order amount is greater than 60,000. Print the name of the category in which the orders have been categorized into in the first column followed by count of such orders in the second column. Sort the result set in descending order of Count of orders..",
        "query": "select distinct IF(Total_order_amount > 60000, 'Expensive Order', IF((Total_order_amount > 10000 AND Total_order_amount <= 60000), 'Not So Expensive Order','Regular Order')) AS 'categories', count(orderId) as 'count' from orders group by categories order by count desc;"
      },
      {
        "id": 215,
        "questionName": "Unique Rowl",
        "description": "find the number of row from orderdetails whose all columns have odd number",
        "query": "select count(productid) from orderdetails where orderdetailid%2=1 and orderid%2=1 and productid%2=1 and quantity%2=1 and supplierid%2=1;"
      }
     
  ];

//   for(var i =0;i<arr.length;i++){

//     if()
//   }

function check(){
    var str =  document.getElementById("txt1").value;
    // console.log(str)

    for(var i =0;i<arr.length;i++){
        if(str==arr[i].questionName){
        document.getElementById("name").innerHTML = arr[i].questionName;
        document.getElementById("desc").innerHTML = arr[i].description
        document.getElementById("quer").innerHTML = arr[i].query;

        }
        
    }
}