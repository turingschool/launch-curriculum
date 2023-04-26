---
layout: page
title: SQL CRUD Lab
---

## Lab Objectives
* Practice using `SELECT` `UPDATE` `REMOVE` and `INSERT`

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>
	Students are going to build upon their work from yesterday's lab.  It would be helpful if they are in the same groups, if possible.  If students need to start from a fresh database setup, you can provide them with this script (it should work if their database is called 'Library'):</p>

<pre>
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
```
</pre>
</aside>

## Practice

In small groups, use PgAdmin to create, update, remove, and query some records for the Library database we created yesterday.  There are some required activities below, but feel free to experiment with your database!  If you ever feel that you need a fresh start for your database, reach out to your instructors.

### Add Books to the Library and Create Library Patrons

1. Use `INSERT` to create at least 5 patrons for your library (these can be real, or fake people).
2. Use `INSERT` to create at least 10 books in your library.  You could have multiple copies of some books, but make sure you have at least 3 unique book titles, and 3 unique authors.  (books can also be real, or fake)

**When creating records, make sure each record has information in all the database columns!**

### Check Out Books

3. Use `UPDATE` to add a patron to at least 4 of your books (indicating that the book has been checked out by that patron). Make sure that at least 2 different patrons have checked out a book.

### Remove Old Books

4. Occasionally, libraries need to pull books out of circulation (perhaps someone wrote in the margins, or the book has too much wear and tear).  Use `REMOVE` to delete the 3 oldest books in the library (the three you created first).

### Query for Available and Unavailable Books

5. Use `SELECT` and `WHERE` to return the title and author of all books that are not checked out.
6. Use `SELECT` and `WHERE` to return the title and author of all books that are checked out.
7. For each patron, use `SELECT` and `WHERE` to return the title of the books each patron has checked out.

## Exit Ticket

Send a slack message to your instructors with the SELECT queries you created in the last section above.