---
layout: page
title: SQL Joins
---

## Learning Goals

* Visualize and practice SQL join queries
* Use WHERE and JOIN together
* Understand the difference between an inner join and a left join

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>script if needed to get everyone at the same spot.

<pre>
DROP TABLE songs, artists;

CREATE TABLE artists (
	id serial PRIMARY KEY,
	name varchar(255),
	hometown varchar(255),
	years_active varchar(255)
);


CREATE TABLE songs (
	id serial PRIMARY KEY,
	title varchar(50),
	length int,
	play_count int,
  artist_id int REFERENCES artists
);

INSERT INTO 
	artists ( 
		name, hometown, years_active
	)
VALUES
	('Prince','Minneapolis','1975-2016'),
	('Talking Heads','New York','1975-1991');


INSERT INTO 
  songs ( 
    title, length, play_count, artist_id
  )
VALUES
('Purple Rain',345,23,1),
('Raspberry Beret',432,12,1),
('Wild Wild Life',367,45,2);
</pre>
</p>
</aside>

## Warm Up Challenge

Let's keep practicing with our Songs and Artists tables.

<p align='center'>
  <img src='/assets/images/module2/Week2/1_to_many_db_image_5.png'>
</p>

For each of the following, what is the SQL command we would use to get this information:
  - Get all song titles  
  - Get the songs with a play count greater than 40
  - Get the artists that have a hometown of Minneapolis, sorted alphabetically by name

  Extra challenge!
  - Get the 5 longest songs that have the letter p in the title

 <aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>
  <pre>
SELECT title FROM songs;
SELECT * from songs where play_count > 40;
SELECT * from artists where hometown = 'Minneapolis' ORDER BY name ASC;
SELECT * from songs where title ILIKE '%p%' ORDER BY length DESC limit 5;
</pre>
    </p>
</aside>

## Joining Tables

### The SQL Join Query

So far, we have looked at SQL queries that deal only with one table. But you will sometimes need to run queries based on information from more than one table. Maybe our query involves both songs and artists!

For example: 
- Find the artists with songs that have been played more than 100 times
- Find all songs where the artist names contains “Prince”

When we come up against this problem, we rely on `JOIN` queries to accomplish this goal.

A `JOIN` pulls information from multiple tables into one temporary table.  Let's see how this works.


In PG Admin, let's take a look at our `songs` and `artists` tables:

```
SELECT * FROM songs;       434 |         2

id |      title      | length | play_count | artist_id
---+-----------------+--------+------------+-----------
 1 | Purple Rain     |    345 |         23 |         1
 2 | Raspberry Beret |    432 |         12 |         1
 3 | Wild Wild Life  |    367 |        367 |         2
(3 rows)
```

``` 
SELECT * FROM artists;

id |      name      |  hometown    | years_active      
----+---------------+--------------+-------------
 1 | Prince         | Minneapolis  | 1975-2016
 2 | Talking Heads  | New York     | 1975-1991
(2 rows)
```

Above, we see our songs and artists table - what happens if we `JOIN` these tables together?

```
SELECT artists.*, songs.* FROM songs JOIN artists ON artists.id = songs.artist_id;

id |     name      | hometown     | years_active | id |      title      | length     | play_count | artist_id
---+---------------+--------------+--------------+----+-----------------+------------+------------+----------
 1 | Prince        |  Minneapolis | 1975-2016    | 1  | Purple Rain     |        345 |        23  |         1
 1 | Prince        |  Minneapolis | 1975-2016    | 2  | Raspberry Beret |        432 |        12  |         1
 2 | Talking Heads |  New York    | 1975-1991    | 3  | Wild Wild Life  |        367 |       367  |         2
(3 rows)
```

**Turn and Talk** What did this query do? How might you describe the return value of this query?

When we run this `JOIN`, we are _joining_ the songs and artists tables together to return a table that includes all the information from _both_ tables. For each artist, we see a row for each song that they have, with the information from both the artists table and the songs table.

When creating a `JOIN` query, there are three essential parts:

  1. `SELECT` - this is what indicates which columns will be included in the resulting table
      - `SELECT * FROM songs`
  2. `JOIN` - the command to join in data from another table
      - `JOIN artists`
  3. `ON` - this tells the join _how_ to join the two tables together, or what is the relationship between the two tables (most often, primary key = foreign key)
      - `ON artists.id = songs.artist_id`

Let's now add another artist, Zac Brown Band.

```SQL
INSERT INTO 
	artists ( 
		name, hometown, years_active
	)
VALUES
	('Zach Brown Band','Atlanta','2002-Present');
```

> **With Your Partner** Run the `JOIN` again, `Zac Brown Band` is not returned in the data! Why are we not seeing _all_ our artists on this joined table?



Let's now add a song where we don't know the artist info.

```SQL
INSERT INTO 
	songs ( 
		title, length, play_count
	)
VALUES
	('Wow such a great song', 10, 1000);
```
Do you think this data will be returned when we run our `JOIN`? Let's pause and predict and then run it!

<!-- Add dropdown spoiler -->

<details><summary>Spoiler</summary><br/>
<p align='center'>
The song without an artist was <b>not</b> returned in the join.
</p>
</details>


# Venn Diagram Review
When we create `JOIN` queries, there are a handful of different join types that we can declare that will affect the resulting table. We can use Venn Diagrams to represent what data will be returned for each type of join.

Let's review the images you looked at in preparation for this lesson.

<p align='center'>
  <img src='/assets/images/module2/Week3/venn_diagrams.png'>
</p>

> **With Your Breakout Room** Explain what each of the shaded regions represents. What animals did you put in each region?

<aside class="instructor-notes">
    <p><strong>Instructor Note</strong><br>it would be awesome for students to annotate and add animals to the image or use pair deck or something here. Or maybe use something like Jamboard with animal images to drag in.</p>
</aside>

## Types of Join Queries

While there are many different types of joins, today, we are going to cover the most common two: **Inner Join** and **Left Join**

### Inner Join
<p align='center'>
  <img src='/assets/images/module2/Week3/inner_join_venn_diagram.png'>
</p>

The default `JOIN` type in SQL is an **Inner JOIN**.  

- Default join type (This is what we've been doing so far when we use the SQL keyword `JOIN`)
- Only returns records that match the ON condition
- Only returns records from table A that have a corresponding record in table B


<p align='center'>
  <img src='/assets/images/module2/Week3/inner_join_before.png'>
</p>

<p align='center'>
  <img src='/assets/images/module2/Week3/inner_join_after.png'>
</p>

### Left Join

<p align='center'>
  <img src='/assets/images/module2/Week3/left_join_venn_diagram.png'>
</p>


The next most common `JOIN` type is a **Left Join**.  

- Will get all records from table A regardless of if they have corresponding rows in table B
- “Left” refers to the first table referenced in the query
  - FROM artists LEFT JOIN songs artists is the “LEFT” table

Example: 
```SQL
SELECT artists.id, artists.name, songs.id, songs.title 
FROM artists 
LEFT JOIN songs 
ON songs.artist_id = artists.id;

```

<p align='center'>
  <img src='/assets/images/module2/Week3/left_join_before.png'>
</p>

<p align='center'>
  <img src='/assets/images/module2/Week3/left_join_after.png'>
</p>

Now, we see bands even if they have no songs.


### Combining `JOIN` and `WHERE`

With your partner: Write a SQL query would to retrieve a list of artists who have songs longer than '400'.

<details><summary>Completed Query</summary><br/>
<p align='center'>

```SQL 
SELECT artists.name FROM artists JOIN songs ON artists.id = songs.artist_id WHERE songs.length > 400;
```
</p>
</details>


### More Advanced Joins

Take a minute to look at this query. What tables are being joined here?

```SQL
SELECT * FROM songs JOIN playlists_songs ON playlists_songs.song_id = songs.id 
JOIN playlists ON playlists_songs.playlist_id = playlists.id
```

<details><summary>Spoiler</summary><br/>
<p>
Did you see how we start by selecting everything form our songs table and then we join in data from <b>two</b> additional tables. We first bring in the data from our playlists_songs join table and then we bring in the data from our playlists table.

Don't worry about fully understanding a query with multiple joins, but it's good to know this is an option. You can research this more if in the future you need to join the data in a many-to-many relationship.
</p>
</details>

## Checks for Understanding

1. What are the two types of joins covered today? And, what do they return?
1. What is the default type of join used when you just type `JOIN`?
1. What is the SQL query to get a list of Artists who have songs that have been played more than 20 times?
1. Which of the following queries would require a join.
    1. Find all of the songs with titles that start with the letter z written by artists from New York.
    1. Find the 10 most listened to songs
    1. Where is the most popular artist from?
1. How would you summarize when/why you need to use a join?