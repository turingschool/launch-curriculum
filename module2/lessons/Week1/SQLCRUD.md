---
layout: page
title: SQL CRUD
---

## Learning Goals
- Define CRUD
- Use SQL to SELECT, INSERT, REMOVE and UPDATE records
- Use basic WHERE clause to filter records

## Warmup

Spend about 10 minutes googling `CRUD` (all caps) as it relates to programming, databases, and SQL.
* What does each letter stand for?
* In your own words, what does each action do?

Be ready to share your findings!

**For this lesson, all SQL examples will be based on our Orders and Customers tables that we created in the [Intro to Databases Lesson](/module2/lessons/Week1/IntroToDatabases)!**

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Encourage students to try any SQL commands they find or see in the lesson.  Reassure students that they will not break anything on their computer or database - we are playing around with data to highlight the SQL commands we want them to learn.</p>
</aside>

## Inserting Data in our Tables

In SQL, we **create** records using the `INSERT INTO` command.  `INSERT INTO` can add single or multiple records.

> With a partner, take a look at the two insert statements below and answer the following questions:
> * What do we need to know about a table in order to create records?
> * What do you think would happen if we did not include a customer's address?
> * Why do you not see an id being created?
> 
> * Run these statements in your database - keep a close eye on syntax!
> * Try creating additional records with different customer data
> To check that records have been created, or anytime you want to see the current state of a table, you can run this statement: `SELECT * FROM <tablename>;`
>
> Be ready to share out!
> 
> ![](/assets/images/module2/Week1/SQL_INSERT.png)

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>During the discussion, make sure to point out that we do _not_ need to include an id for these records because the Id field is a serial.</p>
</aside>

Because we have created our database and tables with very few constraints, we could create a record with only partial information.  We could create a customer with only their name, or only their address.  We are not going to cover too much database administration (things like location settings, access rights, and table settings); as a developer, it is unlikely that you will be in charge of creating a database from scratch.

### Practice Insert

> With a partner, use what you know about INSERT INTO to create records in your `orders` table.  You can use [this data](https://docs.google.com/spreadsheets/d/1KX3EhldBiQAVxXoQpQfzveHbhiNerxmmmkMufFe4ZrM/edit#gid=1715070853), or create your own!  Keep in mind that an order should be associated with an existing customer.
>
> A note about price: we have set up our database to store price in cents, so if an item costs $45.99, that is 4599 cents.
> 
> Reach out to an instructor with any questions or issues that come up!

## Deleting Records

To remove records from our database, we can use the SQL DELETE command.

> With a partner, take a look at the delete statement below and answer the following questions:
> * What do we need to know about a table in order to delete a record?
> * What do you think would happen if we tried to delete a record that doesn't exist?
>
> Be ready to share out!
> 
> ![](/assets/images/module2/Week1/SQL_DELETE.png)
> 
> **Warning** The `WHERE` command tells SQL which records to delete.  If you do not use a `WHERE`, the `DELETE` will apply to **all** rows in the table ☠️

When deleting records, we use a `WHERE` command to isolate the single record that we want to remove.  The `WHERE` command will pull all records that match specific criteria; note that in SQL, we make comparisons with a single `=`.

Though deleting records is possible, in practice we do not often remove records from a database. It is better to indicate that a record (maybe a user) is no longer active instead of deleting it.  That way, we can maintain a history of our data.

### Practice DELETE

> With a partner, use what you know about DELETE to remove one or more records in your `orders` table.  If you end up removing all of the records from the orders table (on purpose, or by accident), INSERT some records to be ready for the next sections!
>
> Reach out to an instructor with any questions or issues that come up!

## Updating Records

Occasionally, we will need to update records.  We can do that with the `UPDATE` command.

> With a partner, take a look at the update statement below and answer the following questions:
> * What do we need to know about a table in order to update a record?
> * What do you think would happen if we tried to update a record that doesn't exist?
> * What do you think would happen if we did not include a **WHERE** in our statement?
>
> Be ready to share out!
> 
##### Update Donovan Castle's Address
```SQL
UPDATE customers
SET address = '1700 Emerson Dr'
WHERE full_name = 'Domovan Castle';
```

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>Be sure to point out that if we forget the `WHERE`, all records in the table will be updated! You could type out an update without a where clause, ask for predictions from students, and then run it and show how everything changes so folks can really feel what happens.</p>
</aside>

### Practice UPDATE

> With a partner, use what you know about UPDATE to make changes to one or more records in the orders table.  
> As an extra challenge:
> * Update more than one column with one statement.
> * Update 2 or more records with one statement.
> Do some googling and/or use [this resource](https://www.w3schools.com/sql/sql_update.asp) to help with these challenges!
>
> Reach out to an instructor with any questions or issues that come up!

## Filtering Records

So far, we have manipulated records in the database (with INSERT, UPDATE, and DELETE), and we have seen the current state of tables (with SELECT *).

Seeing the state of an entire table is great, and with a small dataset, it might be all we need.  But, when we start working with databases that contain many tables, with millions of records, we will need to be more specific when SELECTing our data.

> With a partner, take a look at the select statements below and answer the following questions:
> * What do we need to know about a table in order to write a good select statement?
> * In your own words, what is each statement doing?
> * Given these examples, what does `*` indicate?
> 
> Be ready to share out!
>##### Option 1
>```SQL
>SELECT full_name FROM customers;
>```
>
>##### Option 2
>```SQL
>SELECT full_name, address FROM >customers WHERE id = 2;
>```
>##### Option 3
>```SQL
>SELECT * from customers WHERE id = 2;
>```

### Practice SELECT

> With a partner, use what you know about SELECT and WHERE to create statements that would return the following from the orders table:
> * All columns where the quantity ordered is greater than 2
> * The Price and Item for all of Naji Park's order
> * The Items that cost less than $20 (2000 cents)
> 
> Reach out to an instructor with any questions!

### More SELECTing

There are so many things we can do by combining SELECT with other commands.  We have seen how we can use SELECT and WHERE together; take a look at the examples below for some more ways of SELECTing.  Try these out on your tables to explore what they do!

##### Order the result alphabetically by first name
```SQL
SELECT * FROM customers ORDER BY full_name;
```

##### Return only the item column from all of customer 1's orders, order the result by price, from high to low
```SQL
SELECT item FROM orders
WHERE customer_id = 1
ORDER BY price_in_cents DESC;
```
## Check for Understanding
* Imagine you are in an interview.  The interviewer asks: How would you describe CRUD? (make sure to use examples!)
* Why do we need to use a `WHERE` when deleting or updating records?
* List each CRUD action and its corresponding SQL command(s).
