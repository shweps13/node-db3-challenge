# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

```sql
select p.ProductName, o.CategoryName, o.* 
from products as p 
left join categories as o on p.CategoryID = o.CategoryID;
```

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

```sql
select o.OrderID, s.ShipperName, o.* 
from Orders as o 
left join shippers as s on o.ShipperID = s.ShipperID
WHERE o.OrderDate < "1997-01-09"
order by o.OrderDate;
```

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

```sql
SELECT p.ProductName, od.Quantity 
FROM Products as p
left join OrderDetails as od on od.ProductID = p.ProductID
where od.OrderID = "10251";
```

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

```sql
SELECT o.OrderID, c.CustomerName, e.LastName
FROM Orders as o
left join Customers as c on c.CustomerID = o.CustomerID
left join Employees as e on e.EmployeeID = o.EmployeeID;
```


### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 