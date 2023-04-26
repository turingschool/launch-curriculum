---
layout: page
title: Intro to ORM Lab
---

## Lab Objectives
* Create a library DB using Entity Framework
* Create a one-to-many relationship between books and patrons.

Remember earlier in mod 2 when we used SQL to create a one-to-many relationship between books and patrons? 

The goal for this lab is to create the same tables using Entity Framework.

You may have slightly different fields, but this is roughly the SQL used to make those tables.

```SQL
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
<!-- This isn't great, but I like the idea of students still having their library db as a reference. Very open to other ideas! -->
Note: If you already have a Library database, I recommend naming this new database something like `Library_orm` so that you can keep your old database as a reference.

As you're creating your database, follow the same steps we went through in the lesson.

// Complete steps 1-2 once
1. Create New Project
2. Install Entity Framework

// Loops steps 3-6 for each change to your database. For example, every time you add a new class.

3. Build our Class/Classes
4. Build our Context
5. Create a Migration
6. Apply our Migration to Create our Database