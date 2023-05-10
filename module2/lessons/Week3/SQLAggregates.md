---
layout: page
title: SQL Aggregates
---

## Learning Goals
* Develop a visualization for grouping and aggregating data
* Use GROUP BY, COUNT, SUM, and AVERAGE

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>If students need a totally fresh start on their database, you can give them the script below:
<pre>
DROP TABLE songs, artists;

CREATE TABLE artists (
	id serial PRIMARY KEY,
	name varchar(255),
	hometown varchar(255),
	years_active varchar(255),
    genre varchar(255)
);


CREATE TABLE songs (
	id serial PRIMARY KEY,
	title varchar(50),
	length int,
	play_count int,
    artist_id int REFERENCES artists
);
</pre>
</p>
</aside>

## Warm Up

For this lesson, you will want to have a good amount of data in your Set List database.  Use the script below to insert songs and artists into your database:

```
INSERT INTO artists ( name, hometown, years_active, genre )
VALUES
	('Prince','Minneapolis','1975-2016', 'funk'),
	('Talking Heads','New York','1975-1991', 'new wave'),
    ('Blondie', 'New York', '1974-1982, 1997-Present', 'funk'),
    ('Madonna', 'Bay City, MI', '1979-Present', 'pop');


INSERT INTO songs ( title, length, play_count, artist_id )
VALUES
    ('Purple Rain',345,23,1),
    ('Raspberry Beret',432,12,1),
    ('Wild Wild Life',345,45,2),
    ('Vogue', 408, 62, 4),
    ('La Isla Bonita', 325, 15, 4),
    ('Express Yourself', 312, 33, 4),
    ('Burning Down the House', 348, 10, 2),
    ('Life During Wartime', 264, 8, 2),
    ('And She Was', 340, 11, 2),
    ('This Must Be the Place', 455, 99, 2),
    ('Heart of Glass', 343, 3, 3);
```

After you have inserted this data, query to get the following information:
1. A count of all artists.
1. The length of the longest song.
1. The length of the shortest song.
1. Use WHERE to get the name of the longest song.

## Aggregate Functions

Aggregate functions allow us to ask more meaningful questions about our data.  Not simply 'what is here', but 'how is this relevant'.  We might need to know the average time a user spends on our application; the customer who has bought the most items from our shop; or, the quantity of a particular item that we still have in stock.  All of these vital business questions can be answered by querying a database using **aggregate** functions.

There are many [SQL Aggregate](https://www.sqlservertutorial.net/sql-server-aggregate-functions/) functions.  Today we are going to cover a few of the most commonly used.

### Count

`COUNT()` gives us the number of records in a particular column; or, the number of records in a table.

```sql
-- To get the number of records in a particular column
SELECT COUNT(column_name) FROM table_name;

-- To get the number of records in a table
SELECT COUNT(*) FROM table_name;
```

> With a partner, use COUNT() to answer the following questions:
> 1. How many artists exist?
> 2. How many songs exist?
> 3. How many songs have an associated artist?
> 4. 🌶️Spicy! How many artists are from 'New York'?
> 5. 🌶️Spicy! How many different song lengths are represented?
> 
> Be ready to share out!

### Sum

`SUM()` adds all the values in a particular column and returns the total.

> With a partner, use SUM() to answer the following questions:
> 1. What is the total play_count of all songs?
> 2. What is the total play_count of all songs with artist_id `2`?
> 3. 🌶️ Spicy! What is the total play_count of all songs with a play_count less than 25?
> 
> Be ready to share out!


### Average

`AVERAGE()`  returns the mean (average) of all the numbers in a column.

> With a partner, use AVERAGE() to answer the following questions:
> 1. What is the average length of all songs?
> 2. What is the average length of all songs with a play_count greater than 25?
> 3. 🌶️ Spicy! What is the average play_count of songs for each artist?
> 
> Be ready to share out!

## Grouping

Grouping allows us to arrange data into sub-sections (groups) so that we can answer more specific questions.  In some of the exercises above, we needed to use a `WHERE` clause to drill down to the specific data we were looking for; in one question, we even needed to use multiple SQL statements!  Grouping allows us to answer questions about sub-sections of our data in one SQL statement.

Using `GROUP BY` is a bit more complicated than only using Aggregate functions. As you build your query, you need to determine what to do (or not do) with every column in your table.

** Instructor Note ** You should walk through an example in addition to, or instead of the video. Draw students' attention to some confusing pieces of using multiple aggregators (like seeing count as a column name multiple times). `SELECT COUNT(name), COUNT(years_active) FROM artists GROUP BY hometown;`

Watch [this short video](https://www.loom.com/share/4ce05601a3654b4c99ae2ecb40560fab) that walks through building a grouped aggregate statement on the `artists` table.  If you would like to try out a version of the SQL statement from the video, you can use the script below:

```sql
SELECT hometown, COUNT(name) FROM artists
GROUP BY hometown;
```

<details><summary>Nice to Know: Aliasing</summary>
    <p>
    This is a nice-to-know, non-critical piece of information.
    </p>
    <p>
    When you are using aggregates, it can be difficult sometimes to determine what information is showing up in your result set.  Try running the two SQL statements below:
    </p>
    <code>SELECT hometown, COUNT(name) FROM artists GROUP BY hometown;</code></br>
    <code>SELECT hometown, COUNT(name) AS count_of_unique_artist_names FROM artists GROUP BY hometown;</code>
    </br>
    </br>
    <p>
    Using `AS` allows you to rename the result column.  It <strong>does not</strong> change anything in the database table; it only appears in the results.
    </p>
</details>

> With a partner, use GROUP BY and Aggregate functions, answer the following questions:
> 1. For each artist, what is the average song length?
> 2. How many songs does each artist have?
> 3. What is the total song length for each artist?
> 
> Be ready to share out!

A helpful tip: all fields that appear in the `SELECT` clause MUST be either aggregated or grouped.  **MUST**.

> With a partner, discuss why the above tip is true.  Try to use your own wording to describe what SQL is trying to do when grouping.
> 
> Be ready to share out!

## Check for Understanding
* What are aggregate functions? Where do they appear in SQL statements?
* Why do we need to include an aggregate function when using group by?