---
layout: page
title: SQL Joins Lab
---

## Lab Objectives
* Practice writing `JOIN` queries
* Practice using `JOIN` and `WHERE` together

Let's write some more advanced queries on our Library database. You should have a one-to-many relationship between books and patrons. Each book can be checked out by one patron. And each patron can check out many books.

You probably still have your books and patrons tables, but if not here is a script to create those tables and add some sample data.

```SQL
DROP TABLE books, patrons;
-- this should be a list of the student's tables.  You should update this script with the appropriate table names if you need to help students get started with a clean version.

CREATE TABLE patrons (
	id serial PRIMARY KEY,
	first_name varchar(50),
	last_name varchar(50),
	phone_number varchar(10)
);

CREATE TABLE books (
	id serial PRIMARY KEY,
	title varchar(255),
	author varchar(255),
	checked_out_by int REFERENCES patrons
);

INSERT INTO 
  patrons ( 
    first_name, last_name, phone_number
  )
VALUES
('Zoe', 'Farrell', '1231231234'),
('Richard', 'Tillies', '1111111111' ),
('Megan', 'McMahon', '2222222222');

INSERT INTO 
  books ( 
    title, author, checked_out_by
  )
VALUES
('Winter Counts', 'David Heska Wanbli Weiden', 1),
('Atlas Of the Heart', 'Brene Brown', 1),
('Winter Counts', 'David Heska Wanbli Weiden', 2),
('Winter Counts', 'David Heska Wanbli Weiden', 3),
('A Plague of Giants', 'Kevin Hearne', 2),
('Honor', 'Thrity Umrigar', null)
```

### Joining the books and patrons data

Write a `JOIN` query to join the patrons and books data that only returns books that are currently checked out.

<details><summary>Spoiler</summary><br/>

```SQL
SELECT books.*, patrons.* FROM books JOIN patrons ON books.checked_out_by = patrons.id;
```

</details>

Write a `JOIN` query to join the patrons and books data that returns all books, even ones that are not checked out.

<details><summary>Spoiler</summary>

<pre>SELECT books.*, patrons.* FROM books 
LEFT JOIN patrons ON books.checked_out_by = patrons.id;</pre>

</details>

### Writing questions

Start by brainstorming possible queries for books and patrons that would require a `JOIN`. As a breakout room, post at least two potential queries in the slack thread.

Here are two examples to get you started:

* Who are all the patrons who have currently checked out the book 'A Plague of Giants'?

* What books does the patron with id 2 have checked out?

### Writing SQL queries with joins

Once you've posted your three queries in slack, write the query to answer the two examples above and some of the queries from slack.

I recommend changing the names of books and patrons to match the data in your database so you can better test your queries!

### Extra Challenge

If you want an extra challenge, try writing queries that combine `JOIN` with the aggregate functions we learned yesterday.

For example: 

How many books by the author 'David Heska Wanbli Weiden' does the patron with the phone number '1111111111' have checked out?

This is a tricky question, try building your query bit by bit instead of trying to write the whole thing at once!

<details><summary>Spoiler</summary>

<pre>SELECT count(*) FROM books 
LEFT JOIN patrons ON books.checked_out_by = patrons.id 
WHERE patrons.phone_number = '1111111111' AND author = 'David Heska Wanbli Weiden';
</pre>

</details>

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>might be good to find a volunteer who can talk through their process for building this complicated query for the class. Good to see building something like this step by step</p>
</aside>


